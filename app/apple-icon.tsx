import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0EA5E9",
          borderRadius: "32px",
          fontWeight: "bold",
          fontFamily: "system-ui",
        }}
      >
        3D
      </div>
    ),
    {
      ...size,
    }
  );
}
