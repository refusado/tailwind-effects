export function TextGradient() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-black text-xl">
      <p className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
        This is a gradient text
      </p>

      <p className="bg-gradient-to-l from-zinc-300/95 via-zinc-100 to-zinc-300/95 bg-clip-text text-transparent">
        This is a gradient text too :P
      </p>
    </div>
  );
}
