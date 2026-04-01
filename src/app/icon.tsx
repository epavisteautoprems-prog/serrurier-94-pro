import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 } as const;
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b2b59",
          color: "#ffffff",
          fontSize: 40,
        }}
      >
        🔑
      </div>
    ),
    { ...size },
  );
}

