import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #2E5A8F 0%, #1E3A5F 50%, #142944 100%)",
          color: "white",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 28,
            background:
              "linear-gradient(135deg, #D89253 0%, #B8742C 100%)",
            color: "white",
            fontSize: 56,
            fontWeight: 800,
            letterSpacing: -2,
            boxShadow: "inset 0 2px 0 rgba(255,255,255,0.25)",
          }}
        >
          HIA
        </div>
      </div>
    ),
    { ...size },
  );
}
