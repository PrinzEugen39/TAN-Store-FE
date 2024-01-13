import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRightFromLine, Menu, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import API from "@/hooks/API";
export default function NavBarMenu() {
  const hasUser = useSelector((state: RootState) => state.auth);

  async function handleLogout() {
    await API.get("users/logout");
    window.location.reload();
  }
  return (
    <Sheet>
      <SheetTrigger>
        <div className={buttonVariants({ variant: "ghost" })}>
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-between h-[95%]">
          <div>
            <p>profil</p>
          </div>
          <div>
            <div className="flex justify-between mx-2 font-semibold">
              <p>Cart</p>
              <div className="flex items-center gap-2">
                <p>0</p>
                <ShoppingCart />
              </div>
            </div>
            <div className="mt-1 bg-gray-100 border-t border-gray-200" />
            <div className="flex justify-center py-10">
              <img
                src="/EmptyCart.jpg"
                alt="cartempty"
                className="w-[200px] rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {hasUser.role === "admin" && (
              <Button
                className="flex items-center justify-center w-full gap-3"
                variant={"outline"}
              >
                <span>Go to dashboard</span>
                <ArrowRightFromLine />
              </Button>
            )}
            {hasUser.id !== "" && (
              <Button
                className="w-full"
                variant={"destructive"}
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
