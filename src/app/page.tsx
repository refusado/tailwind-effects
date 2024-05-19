import { Background } from "@/components/Background";
import { EffectsList } from "@/components/EffectsList";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main className="relative px-4 overflow-hidden">
        <Background />
        <Hero />
        <EffectsList />
      </main>
    </>
  );
}
