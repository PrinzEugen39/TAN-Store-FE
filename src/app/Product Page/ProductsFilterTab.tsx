import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductsSearch from "./ProductsSearch";

export default function ProductsFilterTab() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>What do you need?</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={["item-1", "item-2", "item-3"]}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Search</AccordionTrigger>
            <AccordionContent className="flex justify-center gap-1 px-1 pt-1">
              <ProductsSearch />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Needles</li>
                <li>Moksa</li>
                <li>Electric device</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Sort</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Price</li>
                <li>Rating</li>
                <li>Popularity</li>
                <li>Discount</li>
                <li>Relevancy</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
