import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE_CONFIG } from "@/lib/constants";

type ContactPayload = {
  prestation: string;
  urgence: string;
  ville: string;
  prenom: string;
  telephone: string;
  page: string;
};

function env(name: string): string | undefined {
  const v = process.env[name];
  return typeof v === "string" && v.trim().length > 0 ? v.trim() : undefined;
}

function isNonEmptyString(x: unknown): x is string {
  return typeof x === "string" && x.trim().length > 0;
}

function sanitizePhone(raw: string): string {
  return raw.replace(/[^\d+]/g, "").slice(0, 20);
}

type SmtpConfig =
  | { kind: "url"; url: string }
  | { kind: "host"; host: string; port: number; user: string; pass: string; secure: boolean };

function readSmtpConfig(): SmtpConfig | null {
  const url = env("SMTP_URL");
  if (url) return { kind: "url", url };

  const host = env("SMTP_HOST");
  const portRaw = env("SMTP_PORT");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");

  if (!host || !portRaw || !user || !pass) return null;

  const port = Number(portRaw);
  if (!Number.isFinite(port) || port <= 0) return null;

  const secure = env("SMTP_SECURE") === "true" || port === 465;
  return { kind: "host", host, port, user, pass, secure };
}

function escHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sendLeadEmail(args: { payload: ContactPayload; req: Request }) {
  const smtp = readSmtpConfig();
  if (!smtp) {
    // eslint-disable-next-line no-console
    console.warn("[contact] SMTP not configured; skipping email.");
    return;
  }

  const transporter =
    smtp.kind === "url"
      ? nodemailer.createTransport(smtp.url)
      : nodemailer.createTransport({
          host: smtp.host,
          port: smtp.port,
          secure: smtp.secure,
          auth: { user: smtp.user, pass: smtp.pass },
        });

  const from =
    env("SMTP_FROM") ??
    (smtp.kind === "host" ? smtp.user : "no-reply@serrurier-94-pro.fr");

  const to = env("LEADS_TO_EMAIL") ?? SITE_CONFIG.email;

  const subject = `Demande ${args.payload.prestation} · ${args.payload.ville} · ${args.payload.urgence}`;
  const receivedAt = new Date().toISOString();
  const ip = args.req.headers.get("x-forwarded-for") ?? "";
  const ua = args.req.headers.get("user-agent") ?? "";

  const text = [
    `Nouvelle demande (${SITE_CONFIG.name})`,
    "",
    `Prénom: ${args.payload.prenom}`,
    `Téléphone: ${args.payload.telephone}`,
    `Prestation: ${args.payload.prestation}`,
    `Urgence: ${args.payload.urgence}`,
    `Ville: ${args.payload.ville}`,
    `Page: ${args.payload.page || "-"}`,
    "",
    `Reçu: ${receivedAt}`,
    `IP: ${ip || "-"}`,
    `UA: ${ua || "-"}`,
    "",
    `Rappel: ${SITE_CONFIG.phone}`,
  ].join("\n");

  const html = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;line-height:1.5;color:#0f172a">
    <h2 style="margin:0 0 12px">Nouvelle demande (${escHtml(SITE_CONFIG.name)})</h2>
    <table style="border-collapse:collapse;width:100%;max-width:640px">
      <tbody>
        <tr><td style="padding:6px 0;font-weight:700;width:140px">Prénom</td><td style="padding:6px 0">${escHtml(args.payload.prenom)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:700">Téléphone</td><td style="padding:6px 0"><a href="tel:${escHtml(args.payload.telephone)}">${escHtml(args.payload.telephone)}</a></td></tr>
        <tr><td style="padding:6px 0;font-weight:700">Prestation</td><td style="padding:6px 0">${escHtml(args.payload.prestation)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:700">Urgence</td><td style="padding:6px 0">${escHtml(args.payload.urgence)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:700">Ville</td><td style="padding:6px 0">${escHtml(args.payload.ville)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:700">Page</td><td style="padding:6px 0">${escHtml(args.payload.page || "-")}</td></tr>
      </tbody>
    </table>
    <p style="margin:14px 0 0;font-size:12px;color:#334155">
      Reçu: ${escHtml(receivedAt)} · IP: ${escHtml(ip || "-")} · UA: ${escHtml(ua || "-")}
    </p>
  </div>
  `.trim();

  await transporter.sendMail({
    from: `${SITE_CONFIG.name} <${from}>`,
    to,
    subject,
    text,
    html,
    replyTo: to,
  });
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON invalide." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Données invalides." }, { status: 400 });
  }

  const b = body as Partial<ContactPayload>;

  if (
    !isNonEmptyString(b.prestation) ||
    !isNonEmptyString(b.urgence) ||
    !isNonEmptyString(b.ville) ||
    !isNonEmptyString(b.prenom) ||
    !isNonEmptyString(b.telephone)
  ) {
    return NextResponse.json(
      { ok: false, error: "Merci de remplir tous les champs obligatoires." },
      { status: 400 },
    );
  }

  const payload: ContactPayload = {
    prestation: b.prestation.trim(),
    urgence: b.urgence.trim(),
    ville: b.ville.trim(),
    prenom: b.prenom.trim(),
    telephone: sanitizePhone(b.telephone),
    page: isNonEmptyString(b.page) ? b.page.trim() : "",
  };

  // Functional endpoint: logs server-side (can be replaced by email provider later).
  // eslint-disable-next-line no-console
  console.log("[contact]", {
    ...payload,
    receivedAt: new Date().toISOString(),
    ip: req.headers.get("x-forwarded-for") ?? null,
    ua: req.headers.get("user-agent") ?? null,
  });

  try {
    await sendLeadEmail({ payload, req });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact] email error", err);
  }

  return NextResponse.json({ ok: true });
}

