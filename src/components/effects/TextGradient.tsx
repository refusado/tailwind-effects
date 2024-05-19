export function TextGradient() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-black text-transparent text-xl">

      <p className="bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">
        This is a gradient text
      </p>

      <p className="bg-clip-text bg-gradient-to-l from-zinc-300/95 via-zinc-100 to-zinc-300/95" >
        This is a gradient text too :P
      </p>
    </div>
  );
}