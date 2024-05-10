'use client';

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { motion } from "framer-motion";
import { CodeModal } from "./CodeModal";
import { parseAsInteger, useQueryState } from "nuqs";
import { useDisclosure } from "@nextui-org/react";
import { ReactNode, Suspense, useEffect } from "react";
import { EFFECTS, Effect } from "@/data";


export function EffectsList() {
  return (
    <section className="container">
      <Suspense>
        <List />
      </Suspense>
    </section>
  )
}

function List(): ReactNode {
  const itemsData: Effect[] = EFFECTS;
  const [activeItem, setActiveItem] = useQueryState('effect', parseAsInteger);

  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure({
    onClose: () => setActiveItem(null)
  });

  useEffect(() => {
    activeItem == null ? onClose() : onOpen();
  }, [activeItem, onOpen, onClose]);
  
  return (
    <>
      <ul className="gap-8 grid grid-cols-1 sm:grid-cols-2 mx-auto w-full max-w-4xl">
        {itemsData.map(({ name, element, id }, i) => (
            <motion.li
              key={id}
              transition={{ delay: i % 2 == 0 ? 0 : 0.077 }}
              initial={{ opacity: 0, scale: 0.856 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-77px", once: true }}
            >
              <motion.button
                className="md:hover:brightness-110 min-w-full min-h-full md:duration-150"
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveItem(id)}
              >
                <Card>
                  <CardHeader>
                    {name}
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <div className="relative rounded-xl *:min-w-full *:min-h-full overflow-hidden aspect-square">
                      {element}
                    </div>
                  </CardBody>
                </Card>
              </motion.button>
            </motion.li>
          )
        )}
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