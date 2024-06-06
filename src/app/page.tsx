import { Background } from '@/components/Background';
import { EffectsList } from '@/components/EffectsList';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden px-4">
        <Background />
        <Hero />
        <EffectsList />
      </main>
    </>
  );
}
