import { CardData } from "@/app/page";
import { Button, Modal, ModalBody, ModalContent, ModalFooter } from "@nextui-org/react";
import { HTMLMotionProps } from "framer-motion";

type ModalProps =  {
  data: CardData[],
  activeItem: number,
  isOpen: boolean;
  onOpenChange: () => void;
}

export function CodeModal({ isOpen, onOpenChange, data, activeItem }: ModalProps) {
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
          const item = data.find(item => item.id == activeItem);
          if (!item) return <ModalBody>Not found</ModalBody>

          const { title, content, id } = item;

          return (
            <>
              <ModalBody>
                <h3 className="font-bold">{title} ({id})</h3>
                <div className="mb-6 w-full h-96 max-h-[50vh]" dangerouslySetInnerHTML={{ __html: content }}>
                </div>
                <code>
                  <pre className="bg-black p-1 text-wrap">
                    {content}
                  </pre>
                </code>
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