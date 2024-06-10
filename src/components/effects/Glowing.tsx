export function Glowing() {
  return (
    <section className="relative flex items-center justify-center bg-black">
      <div className="*:absolute *:size-48 *:rounded-full *:blur-3xl">
        <div className="bottom-1/2 right-1/2 bg-cyan-500/30"></div>
        <div className="left-1/2 top-1/2 bg-emerald-500/30"></div>
      </div>

      <p className="opacity-80">Some content for the section</p>
    </section>
  );
}
