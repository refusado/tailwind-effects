export function RoundedDivider() {
  return (
    <div className="h-full bg-black *:flex *:h-1/2 *:items-center *:justify-center *:text-opacity-60">
      <section className="bg-cyan-950/30 text-white">
        <p>Random section</p>
      </section>

      <section className="relative bg-black text-emerald-500">
        <div className="text-black *:absolute *:size-12 *:bg-[radial-gradient(circle,transparent_3rem,currentColor_3.1rem)] *:bg-[length:6rem_6rem]">
          <div className="bottom-full left-0 bg-left-bottom"></div>
          <div className="bottom-full right-0 bg-right-bottom"></div>
        </div>

        <p>Section with independent rounded divider</p>
      </section>
    </div>
  );
}
