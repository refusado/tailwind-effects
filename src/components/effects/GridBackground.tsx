export function GridBackground() {
  return (
    <section className="relative size-full bg-black">
      <div className="size-full text-cyan-950/80 [mask-image:radial-gradient(circle,#000,transparent_80%)] *:absolute *:inset-0">
        <div className="bg-gradient-to-r from-current from-[1px] via-transparent via-0% bg-[length:1.4rem_1.4rem] bg-center"></div>
        <div className="bg-gradient-to-b from-current from-[1px] via-transparent via-0% bg-[length:1.4rem_1.4rem] bg-center"></div>
      </div>
    </section>
  );
}
