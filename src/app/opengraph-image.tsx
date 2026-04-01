import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";
export const size = { width: 1200, height: 630 } as const;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#0b2b59",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#f57c00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            🔑
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, fontWeight: 700, opacity: 0.95 }}>{SITE_CONFIG.name}</div>
            <div style={{ fontSize: 16, opacity: 0.9 }}>Val-de-Marne (94) · {SITE_CONFIG.openingHours}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 62, fontWeight: 900, lineHeight: 1.08 }}>
            Serrurier Val-de-Marne (94)
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, opacity: 0.95 }}>
            Urgence 24h/24 · Intervention {SITE_CONFIG.delai} · Devis gratuit
          </div>
          <div style={{ fontSize: 22, opacity: 0.95 }}>
            Ouverture de porte · Changement serrure · Blindage · Vitrier · Rideau métallique
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 20, opacity: 0.95 }}>📞 {SITE_CONFIG.phone}</div>
          <div style={{ fontSize: 18, opacity: 0.9 }}>{SITE_CONFIG.url.replace(/^https?:\/\//, "")}</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

