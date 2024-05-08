import { ItemsSection } from "@/components/ItemsSection";

export default function Home() {
  return (
    <main className="flex justify-center px-4 md:px-12 py-24">
      <section className="flex flex-col items-center gap-20 w-full">
        <h1 className="w-fit text-4xl">Tailwind Effects</h1>

        <p className="max-w-2xl text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque veniam ab maiores quis voluptates nobis atque, labore ipsam, aspernatur similique ducimus!
        </p>

        <ItemsSection />
      </section>
    </main>
  );
}
