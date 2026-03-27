/**
 * BACH brand mark — wordmark + two horizontal bars.
 * variant="white"  → all white (for hero overlay / dark backgrounds)
 * variant="color"  → BACH in primary blue, top bar silver, bottom bar primary blue
 */
export default function Logo({
  variant = "color",
  className = "",
}: {
  variant?: "white" | "color";
  className?: string;
}) {
  const textColor = variant === "white" ? "text-white" : "text-primary";
  const barTopBg = variant === "white" ? "bg-white/40" : "bg-silver";
  const barBottomBg = variant === "white" ? "bg-white" : "bg-primary";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        className={`font-bold text-[26px] md:text-[28px] tracking-[0.18em] uppercase leading-none ${textColor}`}
      >
        BACH
      </span>
      <div className="flex flex-col gap-[3px] h-[20px] md:h-[22px] justify-between">
        <div className={`w-16 md:w-20 h-[6px] md:h-[7px] rounded-[1px] ${barTopBg}`} />
        <div className={`w-16 md:w-20 h-[11px] md:h-[12px] rounded-[1px] ${barBottomBg}`} />
      </div>
    </div>
  );
}
