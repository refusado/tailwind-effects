export function RoundedDivider() {
  return (
    <div className="*:flex *:justify-center *:items-center bg-black h-full *:h-1/2 *:text-opacity-60">

      <section className="bg-cyan-950/30 text-white">
        <p>Random section</p>
      </section>

      <section className="relative bg-black text-emerald-500">
        <div className="*:absolute *:size-12 *:bg-[length:6rem_6rem] *:bg-[radial-gradient(circle,transparent_3rem,currentColor_3.1rem)] text-black">
          <div className="bottom-full left-0 bg-left-bottom"></div>
          <div className="right-0 bottom-full bg-right-bottom"></div>
        </div>

        <p>Section with independent rounded divider</p>
      </section>

    </div>
  );
}