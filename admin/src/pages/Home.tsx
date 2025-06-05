import type { FC } from "react";
import { Navbar } from "../components/UserDashboard/Navbar";
import { Footer } from "../components/UserDashboard/Footer";
import { Outlet } from "react-router-dom";

export const Home: FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
