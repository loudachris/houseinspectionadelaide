import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background:
            "linear-gradient(135deg, #B8742C 0%, #8A5418 100%)",
          color: "white",
          fontSize: 14,
          fontWeight: 800,
          letterSpacing: -0.5,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          borderRadius: 7,
        }}
      >
        HIA
      </div>
    ),
    { ...size },
  );
}
