import { NextResponse } from "next/server";

type EventPayload = {
  name: string;
  ts: number;
  path?: string;
  href?: string;
  text?: string;
  meta?: Record<string, string>;
};

function isRecord(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && x !== null;
}

function asString(x: unknown, max = 300): string | undefined {
  if (typeof x !== "string") return undefined;
  const s = x.trim();
  if (!s) return undefined;
  return s.slice(0, max);
}

function asNumber(x: unknown): number | undefined {
  if (typeof x === "number" && Number.isFinite(x)) return x;
  return undefined;
}

function sanitizeMeta(x: unknown): Record<string, string> | undefined {
  if (!isRecord(x)) return undefined;
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(x)) {
    const key = k.trim().slice(0, 64);
    const val = asString(v, 200);
    if (!key || !val) continue;
    out[key] = val;
  }
  return Object.keys(out).length ? out : undefined;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON invalide." }, { status: 400 });
  }

  if (!isRecord(body)) {
    return NextResponse.json({ ok: false, error: "Données invalides." }, { status: 400 });
  }

  const name = asString(body.name, 80);
  const ts = asNumber(body.ts);
  if (!name || !ts) {
    return NextResponse.json({ ok: false, error: "Événement invalide." }, { status: 400 });
  }

  const payload: EventPayload = {
    name,
    ts,
    path: asString(body.path, 200),
    href: asString(body.href, 400),
    text: asString(body.text, 200),
    meta: sanitizeMeta(body.meta),
  };

  // eslint-disable-next-line no-console
  console.log("[event]", {
    ...payload,
    receivedAt: new Date().toISOString(),
    ip: req.headers.get("x-forwarded-for") ?? null,
    ua: req.headers.get("user-agent") ?? null,
  });

  return NextResponse.json({ ok: true });
}

