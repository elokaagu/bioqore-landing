export default function SectionBlend({
  from,
  to,
  height = "clamp(80px, 12vw, 160px)",
}: {
  from: string;
  to: string;
  height?: string;
}) {
  return (
    <div
      className="w-full shrink-0 pointer-events-none"
      style={{
        height,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
      aria-hidden
    />
  );
}
