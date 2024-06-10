export function RoundedDivider() {
  return (
    <div className="h-full bg-black text-white text-opacity-70 *:h-1/2">
      <section className="flex items-center justify-center bg-cyan-950/30">
        <p>Random section</p>
      </section>

      <section className="relative flex items-center justify-center bg-black text-emerald-800">
        <div className="text-black *:absolute *:size-12 *:bg-[radial-gradient(circle,transparent_3rem,currentColor_3.1rem)] *:bg-[length:6rem_6rem]">
          <div className="bottom-full left-0 bg-left-bottom"></div>
          <div className="bottom-full right-0 bg-right-bottom"></div>
        </div>

        <p>Section with independent rounded divider</p>
      </section>
    </div>
  );
}
