import { CardData } from "@/app/page";
import { Button, Modal, ModalBody, ModalContent, ModalFooter } from "@nextui-org/react";

type ModalProps =  {
  mockData: CardData[],
  activeItem: number,
  isOpen: boolean;
  onOpenChange: () => void;
}

export function CodeModal({ isOpen, onOpenChange, mockData, activeItem }: ModalProps) {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      motionProps={{
        variants: {
          enter: { y: 0, opacity: 1, transition: { ease: "easeOut" } },
          exit: { y: 18, opacity: 0, transition: { duration: 0.17, ease: "easeIn" } },
        }
      }}
    >
      <ModalContent>
        {(onClose) => {
          const item = mockData.find(item => item.id == activeItem);
          
          if (!item) {
            return <ModalBody>Not found</ModalBody>
          }

          const { title, content, id } = item;

          return (
            <>
              <ModalBody>
                <p>{content}</p>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Close {title} ({id})</Button>
              </ModalFooter>
            </>
        )}}
      </ModalContent>
    </Modal>
  );
}