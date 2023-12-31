// import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Featured } from "@/data/Featured";

export default function NavBarRight() {
  return (
    <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Featured Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex gap-3 p-6">
                {Featured.map((component) => (
                  <li className="w-48" key={component.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                        to={component.href}
                      >
                        <img src={component.image} alt="gambar" />
                        <div className="mt-4 mb-2 text-lg font-medium">
                          {component.title}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {component.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to={"#"} className="text-sm">
              Register
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  );
}
