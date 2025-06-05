import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/UserDashboard/Sidebar";

export const Dashboard = () => {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};
