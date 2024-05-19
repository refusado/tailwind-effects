export function Background() {
  return (
    <div className="top-0 left-0 -z-10 absolute w-screen *:h-screen pointer-events-none">
      <div className="relative *:absolute *:blur-3xl *:rounded-full container *:size-48">
        <div className="top-16 right-40 bg-cyan-500/20 md:bg-cyan-500/35"></div>
        <div className="top-48 right-0 bg-emerald-500/20 md:bg-emerald-500/35"></div>
      </div>

      <div className="relative">
        <div className="top-3/4 -left-[15vw] absolute bg-emerald-600/5 blur-3xl rounded-full size-[33vw]"></div>
      </div>
    </div>
  );
}