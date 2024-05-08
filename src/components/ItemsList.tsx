import { CardData } from "@/app/page";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { motion } from "framer-motion";

export function ItemsList({ itemsData, openCode }: {
  itemsData: CardData[],
  openCode: (itemId: number) => void
}) {

  return (
    <ul className="gap-8 grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl">
      {itemsData.map(({ title, content, id }, i) => {
        return (
          <motion.li
            key={id}
            transition={{ delay: i % 2 == 0 ? 0 : 0.077 }}
            initial={{ opacity: 0, scale: 0.909 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-80px" }}
          >
            <motion.button
              className="hover:brightness-110 min-w-full min-h-full duration-100"
              whileTap={{ scale: 0.95 }}
              onClick={() => openCode(id)}
            >
              <Card>
                <CardHeader>
                  {title}
                </CardHeader>
                <Divider />
                <CardBody className="h-64" dangerouslySetInnerHTML={{ __html: content }}>
                </CardBody>
              </Card>
            </motion.button>
          </motion.li>
        )
      })}
    </ul>
  );
}