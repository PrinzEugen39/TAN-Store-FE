import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function ProductsFilterTab() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>What do you need?</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" className="w-full" defaultValue={["item-1", "item-2", "item-3"]}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Search</AccordionTrigger>
            <AccordionContent className="flex justify-center gap-1 px-1 pt-1">
              <Input placeholder="Search..." />
              <Button variant={"secondary"}><Search size={20} className="text-blue-600"/></Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Sort</AccordionTrigger>
            <AccordionContent>
              ayayayayayaya
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
