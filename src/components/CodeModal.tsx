import { EFFECTS } from "@/data";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import 'highlight.js/styles/base16/black-metal.min.css';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { HTMLMotionProps } from "framer-motion";
import { useState } from "react";
import { renderToString } from "react-dom/server";


type ModalProps =  {
  activeItem: number,
  isOpen: boolean,
  onOpenChange: () => void
}

const modalMotion: HTMLMotionProps<"section"> = {
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
}

export function CodeModal({ isOpen, onOpenChange, activeItem }: ModalProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const activeEffect = EFFECTS.find(effect => effect.id === activeItem);

  // to fix - dont show when close the modal, just with invalid id
  if (activeEffect === undefined) return EmptyModal();

  hljs.registerLanguage('xml', xml);

  const indentCode = require('js-beautify').html;
  const effectCode = indentCode(renderToString(activeEffect.element));
  const highlitedCode = hljs.highlight(effectCode, {language: 'xml'}).value;

  function onCopy() {
    navigator.clipboard.writeText(effectCode);

    setTimeout(() => setHasCopied(true), 150);
    setTimeout(() => setHasCopied(false), 1600);
  };

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      motionProps={modalMotion}
      placement="center"
      size="5xl"
    >
      <ModalContent className="mx-4">
        <ModalHeader>
          <h3>{activeEffect.name}</h3>
        </ModalHeader>
        <ModalBody className="px-2 md:px-4">
          <div className="flex md:flex-row flex-col gap-3 mb-2">
            <div className="relative flex-[2] rounded-2xl *:min-w-full min-h-60 *:min-h-full overflow-hidden aspect-square">
              {activeEffect.element}
            </div>
            <div className="relative flex-[3] w-full">
              <pre className="w-full h-full text-wrap break-all">
                <code className="rounded-2xl h-full overflow-hidden hljs" dangerouslySetInnerHTML={{ __html: highlitedCode }}>
                </code>
              </pre>
              <div className="right-2 bottom-2 md:absolute mt-3 md:mt-0 ml-auto md:ml-0 size-fit">
                {hasCopied ?
                  <Button isDisabled>Copied ✔</Button> :
                  <Button onPress={onCopy}>Copy code</Button>
                }
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
                <ModalHeader>
                  Not found :/
                </ModalHeader>
                <ModalBody>
                  <p className="opacity-20 text-3xl text-center">Empty space... please try again &apos;^^</p>
                </ModalBody>
                <ModalFooter>
                  <Button onPress={onClose}>Close</Button>
                </ModalFooter>
              </>
          )}}
        </ModalContent>
      </Modal>
    );
  }
}
