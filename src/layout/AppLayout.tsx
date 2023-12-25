import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <div className="sticky top-0 bg-white">
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
