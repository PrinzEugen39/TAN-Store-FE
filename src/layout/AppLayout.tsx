import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
