export function Glowing() {
  return (
    <div className="relative *:absolute bg-black *:blur-3xl *:rounded-full *:size-[40%]">
      <div className="right-1/2 bottom-1/2 bg-cyan-500/40"></div>
      <div className="top-1/2 left-1/2 bg-emerald-500/40"></div>
    </div>
  );
}