'use client';

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { motion } from "framer-motion";
import { CodeModal } from "./CodeModal";
import { parseAsInteger, useQueryState } from "nuqs";
import { useDisclosure } from "@nextui-org/react";
import { Suspense, useEffect } from "react";
import { EFFECTS, Effect } from "@/data";

function ItemsList() {
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
    activeItem == null ? onClose() : onOpen();
  }, [activeItem, onOpen, onClose]);

  const itemsData: Effect[] = EFFECTS;

  return (
    <>
      <ul className="gap-8 grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl">
        {itemsData.map(({ name, element, id }, i) => {
          return (
            <motion.li
              key={id}
              transition={{ delay: i % 2 == 0 ? 0 : 0.077 }}
              initial={{ opacity: 0, scale: 0.856 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-80px" }}
            >
              <motion.button
                className="hover:brightness-110 min-w-full min-h-full duration-150"
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveItem(id)}
              >
                <Card>
                  <CardHeader>
                    {name}
                  </CardHeader>
                  <Divider />
                  <CardBody className="h-64">
                    {element}
                  </CardBody>
                </Card>
              </motion.button>
            </motion.li>
          )
        })}
      </ul>

      <CodeModal
        activeItem={activeItem || 0}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
      </CodeModal>
    </>
  );
}

export function ItemsSection() {
  return (
    <Suspense>
      <ItemsList />
    </Suspense>
  )
}