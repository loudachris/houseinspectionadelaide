import { ImageResponse } from "next/og";

export const alt =
  "House Inspection Adelaide - independent building inspector matching in 24 hours";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(120% 90% at 0% 0%, #2E5A8F 0%, #1E3A5F 45%, #142944 100%)",
          color: "white",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          padding: 72,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(800px 400px at 95% -10%, rgba(184,116,44,0.30), transparent 60%), radial-gradient(600px 600px at 5% 110%, rgba(46,90,143,0.5), transparent 60%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background:
                "linear-gradient(135deg, #D89253 0%, #B8742C 100%)",
              color: "white",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: -1,
              boxShadow: "inset 0 2px 0 rgba(255,255,255,0.25)",
            }}
          >
            HIA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.3 }}>
              House Inspection Adelaide
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                opacity: 0.7,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                marginTop: 2,
              }}
            >
              Independent matching service
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 18,
              fontWeight: 600,
              color: "#D89253",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#D89253",
              }}
            />
            ADELAIDE · 3 QUOTES IN 24 HOURS
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: -2.5,
              lineHeight: 1.02,
              maxWidth: 1000,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Independent building inspections,
            <span style={{ color: "#D89253", marginLeft: 16 }}>
              matched to your property.
            </span>
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 920,
              marginTop: 8,
            }}
          >
            Three licensed independent Adelaide inspectors. AS 4349.1 compliant
            reports. No agent referrals.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            position: "relative",
          }}
        >
          {[
            "AS 4349.1 compliant",
            "Licensed only",
            "Fully insured network",
            "24hr match",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 18px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1.5px solid rgba(216,146,83,0.4)",
                color: "white",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
