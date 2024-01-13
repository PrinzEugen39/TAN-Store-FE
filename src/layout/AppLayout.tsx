import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 bg-white">
        <NavBar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
