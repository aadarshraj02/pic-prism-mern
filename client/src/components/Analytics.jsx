import DashboardHeader from "../components/DashboardHeader";
import { useLocation } from "react-router-dom";

const Analytics = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <DashboardHeader />
      <h1 className="text-2xl font-semibold mb-5 ml-8">Analytics</h1>
      <h2 className="text-2xl font-semibold my-5 ml-8">
        {pathname == "/seller/profile" ? "Uploaded" : "Purchased"} This Year
      </h2>
    </div>
  );
};

export default Analytics;
