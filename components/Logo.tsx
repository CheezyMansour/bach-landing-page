export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Text */}
      <span className="font-bold text-3xl text-primary tracking-wider">
        BACH
      </span>

      {/* Bars */}
      <div className="flex flex-col gap-1">
        <div className="w-16 h-1.5 bg-[#878787]" />
        <div className="w-16 h-4 bg-primary" />
      </div>
    </div>
  );
}
