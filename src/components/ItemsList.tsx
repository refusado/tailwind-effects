import { CardData } from "@/app/page";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export function ItemsList({ itemsData, openModal }: {
  itemsData: CardData[],
  openModal: (itemId: number) => void
}) {

  return (
    <ul className="gap-8 grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl">
      {itemsData.map(({ title, content, id }) => {
        return (
          <li key={id}>
            <button
              onClick={() => openModal(id)}
              className="hover:-translate-y-1 duration-300"
            >
              <Card>
                <CardHeader>
                  {title}
                </CardHeader>
                <Divider />
                <CardBody className="h-52">
                  {content}
                </CardBody>
              </Card>
            </button>
          </li>
        )
      })}
    </ul>
  );
}