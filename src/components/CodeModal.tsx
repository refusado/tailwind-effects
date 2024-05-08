import { EFFECTS } from "@/data";
import { Button, Modal, ModalBody, ModalContent, ModalFooter } from "@nextui-org/react";
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

  if (activeEffect === undefined) {
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
                <ModalBody>
                  <p>Effect not found :\</p>
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

  const effectCode = renderToString(activeEffect.element);

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
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <h3 className="font-bold">{activeEffect.name}</h3>
              <div className="mb-6 w-full h-96 max-h-[50vh]">
                {activeEffect.element}
              </div>
              <code>
                <pre className="bg-black p-1 text-wrap">
                  {effectCode}
                </pre>
              </code>
            </ModalBody>
            <ModalFooter>
              {hasCopied ?
                <Button isDisabled>Copied ✔</Button> :
                <Button onPress={onCopy}>Copy code</Button>
              }
              <Button onPress={onClose}>Close</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}