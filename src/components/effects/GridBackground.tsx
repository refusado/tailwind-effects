export function GridBackground() {
  return (
    <section className="relative bg-black size-full">
      <div className="text-cyan-950/80 size-full [mask-image:radial-gradient(circle,#000,transparent_80%)] *:absolute *:inset-0">
        <div className="bg-[length:1.4rem_1.4rem] bg-gradient-to-r from-[1px] from-current via-0% via-transparent bg-center"></div>
        <div className="bg-[length:1.4rem_1.4rem] bg-gradient-to-b from-[1px] from-current via-0% via-transparent bg-center"></div>
      </div>
    </section>
  );
}