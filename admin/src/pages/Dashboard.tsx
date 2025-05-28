import { Footer } from "../components/UserDashboard/Footer";
import { Navbar } from "../components/UserDashboard/Navbar";
import { Sidebar } from "../components/UserDashboard/Sidebar";

export const Dashboard = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="">
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};
