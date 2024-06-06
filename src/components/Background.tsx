export function Background() {
  return (
    <div className="pointer-events-none absolute left-0 top-0 -z-10 w-screen *:h-screen">
      <div className="container relative *:absolute *:size-48 *:rounded-full *:blur-3xl">
        <div className="right-40 top-16 bg-cyan-500/20 md:bg-cyan-500/35"></div>
        <div className="right-0 top-48 bg-emerald-500/20 md:bg-emerald-500/35"></div>
      </div>

      <div className="relative">
        <div className="absolute -left-[15vw] top-3/4 size-[33vw] rounded-full bg-emerald-600/5 blur-3xl"></div>
      </div>
    </div>
  );
}
