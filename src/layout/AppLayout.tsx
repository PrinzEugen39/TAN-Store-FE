import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <MaxWidthWrapper>
        <NavBar />
      </MaxWidthWrapper>
      <Outlet />
    </>
  );
}
