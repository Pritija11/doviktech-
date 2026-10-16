import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Dovik Technologies — Custom Software, Built to Last";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f2ed",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 20% 20%, rgba(245,0,49,0.12), transparent 55%), radial-gradient(circle at 85% 80%, rgba(36,44,49,0.10), transparent 55%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={100}
          height={100}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 28,
            fontSize: 58,
            fontWeight: 600,
            fontStyle: "italic",
            letterSpacing: "-0.01em",
            color: "#14181f",
          }}
        >
          Dovik Technologies
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 16,
            fontSize: 24,
            color: "#525f6b",
          }}
        >
          Custom software, built to last
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 6,
            background: "#f50031",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
