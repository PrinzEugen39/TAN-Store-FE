import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import { ReactNode } from "react";

interface IDrawerM {
  title: string;
  trigger: string;
  icon: JSX.Element;
  children?: ReactNode;
}

export default function DrawerMobile({ title, trigger, icon, children }: IDrawerM) {
  return (
    <div>
      <Drawer>
        <DrawerTrigger className="flex items-center gap-2">
          <span>{trigger}</span>
          {icon}
        </DrawerTrigger>
        <DrawerContent className="h-1/3">
          <DrawerHeader className="h-full">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <DrawerTitle>{title}</DrawerTitle>
              {children}
            </div>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="default">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
