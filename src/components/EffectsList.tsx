'use client';

import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { motion } from 'framer-motion';
import { CodeModal } from './CodeModal';
import { parseAsInteger, useQueryState } from 'nuqs';
import { useDisclosure } from '@nextui-org/react';
import { ReactNode, Suspense, useEffect } from 'react';
import { EFFECTS, Effect } from '@/data';

export function EffectsList() {
  return (
    <section className="container pb-40">
      <Suspense>
        <List />
      </Suspense>
    </section>
  );
}

function List(): ReactNode {
  const itemsData: Effect[] = EFFECTS;
  const [activeItem, setActiveItem] = useQueryState('effect', parseAsInteger);

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure({
    onClose: () => setActiveItem(null),
  });

  useEffect(() => {
    activeItem == null ? onClose() : onOpen();
  }, [activeItem, onOpen, onClose]);

  return (
    <>
      <motion.ul className="mx-auto grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
        {itemsData.map(({ name, element, id }, i) => (
          <motion.li
            key={id}
            transition={{ delay: 0.085 * i }}
            initial={{ opacity: 0, scale: 0.856 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card
              className="min-h-full min-w-full"
              isPressable
              onPress={() => setActiveItem(id)}
            >
              <CardHeader>
                <p className="mb-1">{name}</p>
              </CardHeader>
              <CardBody>
                <div className="relative aspect-square overflow-hidden rounded-xl *:min-h-full *:min-w-full">
                  {element}
                </div>
              </CardBody>
            </Card>
          </motion.li>
        ))}
      </motion.ul>

      <CodeModal
        activeItem={activeItem || 0}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      ></CodeModal>
    </>
  );
}
