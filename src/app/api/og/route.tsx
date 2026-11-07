import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") || "pt";
    const defaultTitle = lang === "pt" ? "Artigo" : "Article";
    const defaultCategory = lang === "pt" ? "ARTIGO" : "ARTICLE";
    const title = searchParams.get("title")?.slice(0, 100) || defaultTitle;
    const category = searchParams.get("category") || defaultCategory;
    const theme = searchParams.get("theme") === "light" ? "light" : "dark";
    const isDark = theme === "dark";

    const backgroundColor = isDark ? "#0d0e12" : "#ffffff";
    const backgroundImage = isDark
      ? `
          radial-gradient(ellipse at top left, rgba(255, 0, 128, 0.22) 0%, transparent 68%),
          radial-gradient(ellipse at bottom right, rgba(0, 204, 255, 0.25) 0%, transparent 68%),
          radial-gradient(ellipse at bottom left, rgba(255, 153, 0, 0.18) 0%, transparent 68%)
        `
      : `
          radial-gradient(ellipse at top left, rgba(255, 0, 128, 0.12) 0%, transparent 70%),
          radial-gradient(ellipse at bottom right, rgba(0, 204, 255, 0.15) 0%, transparent 70%),
          radial-gradient(ellipse at bottom left, rgba(255, 204, 0, 0.12) 0%, transparent 70%)
        `;

    const primaryTextColor = isDark ? "#F4F4F5" : "#111111";
    const secondaryTextColor = isDark ? "#E4E4E7" : "#111111";
    const signatureColor = isDark ? "#A1A1AA" : "#111111";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "80px 100px",
            backgroundColor,
            backgroundImage,
          }}
        >
          <div style={{ display: "flex" }}>
            <span
              style={{
                color: "#FF9900",
                fontWeight: 800,
                fontSize: 40,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {category}
            </span>
          </div>

          <div style={{ display: "flex", maxWidth: "900px" }}>
            <h1
              style={{
                color: primaryTextColor,
                fontWeight: 800,
                fontSize: 72,
                lineHeight: 1.1,
                fontFamily: "sans-serif",
              }}
            >
              {title}
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <span
              style={{
                color: signatureColor,
                fontWeight: 700,
                fontSize: 36,
                opacity: isDark ? 0.85 : 0.7,
                letterSpacing: "0.02em",
              }}
            >
              Pedro Nieto
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch {
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
