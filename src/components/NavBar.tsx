import { Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavBarMenu from "./NavBarMenu";
import NavBarRight from "./NavBarRight";

export default function NavBar() {
  return (
    <div className="sticky top-0 bg-white">
      <MaxWidthWrapper className="font-inter">
        <div className="py-1 border-b border-blue-100 sm:py-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-5">
              <Link to="/welcome">
                <img src="/TANlogo.png" alt="logo" className="h-10 sm:h-12" />
              </Link>
              <div>
                <p className="hidden text-xl font-semibold sm:block">
                  The Acupuncture Needs
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
    </div>
  );
}
