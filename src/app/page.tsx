import { EffectsList } from "@/components/EffectsList";

export default function Home() {
  return (
    <main className="px-4 md:px-12 py-24">
      <section className="mb-20 lg:text-center container">
        <h1 className="mb-5 lg:mb-7 text-4xl lg:text-5xl">Tailwind Effects</h1>

        <p className="mb-4 lg:text-lg">
          A collection of Tailwind CSS classes with cool visual effects for our user interfaces 🙅‍♂️
        </p>

        <p className="flex items-center gap-2 lg:mx-auto w-fit">
          <a href="https://github.com/refusado/tailwind-effects" target="_blank" rel="noopener noreferrer">
            <img alt="Github repository" src="https://img.shields.io/badge/github-%2523121011.svg?style=flat&logo=github&label=repository&color=blue&link=https%3A%2F%2Fgithub.com%2Frefusado%2Ftailwind-effects" />
          </a>

          <img alt="Visitors count" src="https://img.shields.io/endpoint?url=https%3A%2F%2Fhits.dwyl.com%2Frefusado%2Ftailwind-effects.json&style=flat&label=visitors&color=black" />
        </p>
      </section>

      <EffectsList />
    </main>
  );
}
