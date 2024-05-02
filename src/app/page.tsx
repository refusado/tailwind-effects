'use client';

import { CodeModal } from "@/components/CodeModal";
import { ItemsList } from "@/components/ItemsList";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";

export type CardData = {
  id: number;
  title: string;
  content: string;
};

const mockData: CardData[] = [
  {
    id: 1,
    title: "Fluffy Card",
    content: "This is an adorable white kitten with blue eyes. It loves to nap in the afternoon sun and chase butterflies in the garden."
  },
  {
    id: 2,
    title: "Adventurous Card",
    content: "This brave cat is known for its incredible outdoor adventures. It has climbed mountains, explored forests, and even swam in wild rivers!"
  },
  {
    id: 3,
    title: "Dreamer Card",
    content: "This cat has its head in the clouds! It spends hours gazing out the window, imagining distant worlds and fantastical stories."
  }
];

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeItem, setActiveItem] = useState(0);

  const handleOpen = (cardId: number) => {
    onOpen();
    setActiveItem(cardId);
  };

  return (
    <main className="flex justify-center px-4 md:px-12 py-24 container">
      <section className="flex flex-col items-center w-full">
        <h1 className="mb-12 w-fit text-3xl">Tailwind Effects</h1>

        <ItemsList itemsData={mockData} openModal={handleOpen} />

        <CodeModal
          mockData={mockData}
          activeItem={activeItem}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      </section>
    </main>
  );
}
