import React from "react";
import { PALETTES, type PaletteKey } from "./palettes";

export { PALETTES };
export type { PaletteKey };

// === LOGO COMPONENT ===
interface LogoProps {
  palette: PaletteKey;
  size?: "sm" | "md" | "lg" | "xl";
  darkBg?: boolean;
  showSubline?: boolean;
  lineStyle?: "solid" | "dashed" | "segments";
}

const SIZES = {
  sm: { text: "1.25rem", lineH: 3, gap: 4, sub: "0.6rem" },
  md: { text: "2rem", lineH: 4, gap: 6, sub: "0.75rem" },
  lg: { text: "3rem", lineH: 5, gap: 8, sub: "0.9rem" },
  xl: { text: "4.5rem", lineH: 7, gap: 10, sub: "1.1rem" },
};

export function Logo({
  palette,
  size = "lg",
  darkBg = false,
  showSubline = false,
  lineStyle = "segments",
}: LogoProps) {
  const colors = PALETTES[palette].colors;
  const s = SIZES[size];
  const textColor = darkBg ? "#FFFFFF" : "#1A1A1A";

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: s.gap }}>
      <span
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: s.text,
          color: textColor,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        la abigarrada
      </span>
      <div style={{ display: "flex", width: "100%", gap: lineStyle === "segments" ? 2 : 0, height: s.lineH }}>
        {colors.map((color, i) => (
          <div
            key={`${palette}-${i}`}
            style={{
              flex: 1,
              backgroundColor: color,
              height: s.lineH,
              borderRadius: lineStyle === "segments" ? 1 : 0,
              borderRight: lineStyle === "dashed" && i < colors.length - 1 ? "2px solid transparent" : "none",
            }}
          />
        ))}
      </div>
      {showSubline && (
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: s.sub,
            color: darkBg ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          proyecto editorial
        </span>
      )}
    </div>
  );
}

// === PROFILE ICON COMPONENT ===
// Avatar / favicon-scale mark: "la_" donde el guion bajo es una franja segmentada.
// Hereda automaticamente la paleta activa del logo madre (mismo prop palette).
interface ProfileIconProps {
  palette: PaletteKey;
  size?: number;
  darkBg?: boolean;
  segments?: number;
}

export function ProfileIcon({ palette, size = 96, darkBg = false, segments = 4 }: ProfileIconProps) {
  const allColors = PALETTES[palette].colors;
  const step = allColors.length / segments;
  const colors = Array.from({ length: segments }, (_, i) => allColors[Math.min(Math.floor(i * step), allColors.length - 1)]);

  const bg = darkBg ? "#2A2A2A" : "#FAFAF8";
  const textColor = darkBg ? "#FFFFFF" : "#1A1A1A";
  const fontSize = size * 0.5;
  const barHeight = Math.max(2, Math.round(size * 0.06));
  const barWidth = size * 0.42;
  const gap = Math.max(1, Math.round(size * 0.012));

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: size * 0.06,
        position: "relative",
      }}
    >
      <span
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize,
          color: textColor,
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        la
      </span>
      <div style={{ display: "flex", gap, width: barWidth, height: barHeight }}>
        {colors.map((c, i) => (
          <div
            key={`${palette}-icon-${i}`}
            style={{ flex: 1, backgroundColor: c, borderRadius: 1 }}
          />
        ))}
      </div>
    </div>
  );
}

// === SOCIAL TEMPLATE COMPONENT ===
interface SocialTemplateProps {
  platform: "instagram" | "facebook" | "x" | "linkedin" | "email";
  palette: PaletteKey;
  children?: React.ReactNode;
}

const PLATFORM_SIZES: Record<string, { w: number; h: number; label: string }> = {
  instagram: { w: 360, h: 360, label: "Instagram Post (1080x1080)" },
  facebook: { w: 400, h: 209, label: "Facebook Cover (1200x628)" },
  x: { w: 400, h: 133, label: "X/Twitter Header (1500x500)" },
  linkedin: { w: 400, h: 200, label: "LinkedIn Banner (1584x396)" },
  email: { w: 400, h: 140, label: "Email Header (600x200)" },
};

export function SocialTemplate({ platform, palette, children }: SocialTemplateProps) {
  const { w, h, label } = PLATFORM_SIZES[platform];
  const colors = PALETTES[palette].colors;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "rgba(0,0,0,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label}
      </span>
      <div
        style={{
          width: w,
          height: h,
          backgroundColor: "#2A2A2A",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Bottom color bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", height: platform === "instagram" ? 8 : 5 }}>
          {colors.map((c, i) => (
            <div key={i} style={{ flex: 1, backgroundColor: c }} />
          ))}
        </div>
        {children || (
          <Logo palette={palette} size={platform === "instagram" ? "lg" : "md"} darkBg showSubline />
        )}
      </div>
    </div>
  );
}
