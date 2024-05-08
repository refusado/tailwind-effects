'use client';

import { CodeModal } from "@/components/CodeModal";
import { ItemsList } from "@/components/ItemsList";
import { useDisclosure } from "@nextui-org/react";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

export type CardData = {
  id: number;
  title: string;
  content: string;
};

const mockData: CardData[] = [
  {
    id: 1,
    title: "Siberian Cat",
    content: `<div class="bg-gradient-to-r from-cyan-600 to-blue-600 w-full h-full"></div>`,
  },
  {
    id: 2,
    title: "Scottish Fold",
    content: `<div class="bg-gradient-to-r from-cyan-600 to-pink-600 w-full h-full"></div>`,
  },
  {
    id: 3,
    title: "Ragdoll",
    content: `<div class="bg-gradient-to-r from-cyan-600 to-lime-600 w-full h-full"></div>`,
  },
  {
    id: 4,
    title: "British Shorthair",
    content: `<div class="bg-gradient-to-r from-cyan-600 to-teal-600 w-full h-full"></div>`,
  },
  {
    id: 5,
    title: "Birman",
    content: `<div class="bg-gradient-to-r from-cyan-600 to-rose-600 w-full h-full"></div>`,
  },
  {
    id: 6,
    title: "Bombay Cat",
    content: `<div class="bg-gradient-to-r from-cyan-600 to-purple-600 w-full h-full"></div>`,
  },
  {
    id: 7,
    title: "Burmese Cat",
    content: `<div class="bg-gradient-to-r from-cyan-600 to-fuchsia-600 w-full h-full"></div>`,
  },
  {
    id: 8,
    title: "Egyptian Mau",
    content: `<div class="bg-gradient-to-r from-cyan-600 to-amber-600 w-full h-full"></div>`,
  },
  {
    id: 9,
    title: "Himalayan Cat",
    content: `<div class="bg-gradient-to-r from-cyan-600 to-red-600 w-full h-full"></div>`,
  },
  {
    id: 10,
    title: "Japanese Bobtail",
    content: `<div class="bg-gradient-to-r from-cyan-600 to-indigo-600 w-full h-full"></div>`,
  },
  {
    id: 11,
    title: "Manx Cat",
    content: `<div class="bg-gradient-to-r from-cyan-600 to-emerald-600 w-full h-full"></div>`,
  },
  {
    id: 12,
    title: "Norwegian Forest Cat",
    content: `<div class="bg-gradient-to-r from-cyan-600 to-yellow-600 w-full h-full"></div>`,
  }
];

export default function Home() {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure({
    onClose: () => setActiveItem(null)
  });

  const [activeItem, setActiveItem] = useQueryState(
    'effect',
    parseAsInteger.withOptions({
      history: 'replace'
    })
  );

  useEffect(() => {
    activeItem ? onOpen() : onClose();
  }, [activeItem]);

  return (
    <main className="flex justify-center px-4 md:px-12 py-24">
      <section className="flex flex-col items-center gap-20 w-full">
        <h1 className="w-fit text-4xl">Tailwind Effects</h1>

        <p className="max-w-2xl text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque veniam ab maiores quis voluptates nobis atque, labore ipsam, aspernatur similique ducimus!
        </p>

        <ItemsList
          itemsData={mockData}
          openCode={(cardId: number) => setActiveItem(cardId)}
        />

        <CodeModal
          data={mockData}
          activeItem={activeItem || 0}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      </section>
    </main>
  );
}
