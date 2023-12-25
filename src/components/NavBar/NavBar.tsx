import { useNavigate } from "react-router-dom";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavBarMenu from "./NavBarMenu";
import NavBarRight from "./NavBarRight";
import { Button } from "../ui/button";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <MaxWidthWrapper>
      <div className="py-1 border-b border-blue-100 sm:py-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-5">
            <Button
              variant={"link"}
              onClick={() => {
                navigate("/welcome");
                window.scrollTo(0, 0);
              }}
            >
              <img src="/TANlogo.png" alt="logo" className="h-10 sm:h-12" />
            </Button>
            <div>
              <p className="hidden text-xl font-semibold sm:block">
                <span className="text-blue-600">T</span>he{" "}
                <span className="text-blue-600">A</span>cupuncture{" "}
                <span className="text-blue-600">N</span>eeds
              </p>
              <p className="font-semibold text-md sm:hidden ">TAN Store</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="hidden gap-5 sm:flex">
              <NavBarRight />
            </div>
            <NavBarMenu />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
