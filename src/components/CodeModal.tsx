import { EFFECTS } from '@/data';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/base16/black-metal-marduk.min.css';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { HTMLMotionProps } from 'framer-motion';
import { useState } from 'react';
import { renderToString } from 'react-dom/server';

type ModalProps = {
  activeItem: number;
  isOpen: boolean;
  onOpenChange: () => void;
};

export function CodeModal({ isOpen, onOpenChange, activeItem }: ModalProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const activeEffect = EFFECTS.find((effect) => effect.id === activeItem);

  const modalMotion: HTMLMotionProps<'section'> = {
    variants: {
      enter: {
        scale: 1,
        opacity: 1,
      },
      exit: {
        scale: 0.9,
        opacity: 0,
      },
    },
  };

  // to fix - dont show when close the modal, just with invalid id
  if (activeEffect === undefined) return EmptyModal();

  const indentCode = require('js-beautify').html;
  const effectCode = indentCode(renderToString(activeEffect.element));

  hljs.registerLanguage('xml', xml);
  const highlitedCode = hljs.highlight(effectCode, { language: 'xml' }).value;

  function onCopy() {
    navigator.clipboard.writeText(effectCode);

    setTimeout(() => setHasCopied(true), 150);
    setTimeout(() => setHasCopied(false), 1600);
  }

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      motionProps={modalMotion}
      placement="center"
      size="5xl"
    >
      <ModalContent>
        <ModalHeader>
          <h3>{activeEffect.name}</h3>
        </ModalHeader>
        <ModalBody className="px-2 md:px-4">
          <div className="mb-2 flex flex-col gap-3 md:flex-row">
            <div className="flex h-[35vh] w-full justify-center md:h-[50vh] md:w-[40%] lg:h-[42vh]">
              <div className="relative w-full overflow-hidden rounded-2xl *:min-h-full *:min-w-full">
                {activeEffect.element}
              </div>
            </div>

            <div className="relative h-[40vh] w-full overflow-hidden rounded-2xl md:h-[50vh] md:w-[60%] lg:h-[42vh]">
              <pre className="h-full w-full">
                <code
                  className="hljs h-full"
                  dangerouslySetInnerHTML={{ __html: highlitedCode }}
                ></code>
              </pre>

              <div className="absolute bottom-4 right-4 mt-0 size-fit bg-black md:bottom-6 md:right-6">
                {hasCopied ? (
                  <Button color="primary" isDisabled>
                    Copied ✔
                  </Button>
                ) : (
                  <Button color="primary" onPress={onCopy}>
                    Copy code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );

  function EmptyModal() {
    return (
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={modalMotion}
        placement="center"
        size="5xl"
      >
        <ModalContent>
          {(onClose) => {
            return (
              <>
                <ModalHeader>Not found :/</ModalHeader>
                <ModalBody>
                  <p className="text-center text-3xl opacity-20">
                    Empty space... please try again &apos;^^
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            );
          }}
        </ModalContent>
      </Modal>
    );
  }
}
