// import Analytics from "../components/Analytics";
import DashboardSidebar from "../components/DashboardSidebar";
import PhotoManagement from "../components/seller/PhotoManagement";

const SellerDashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <DashboardSidebar />
      <PhotoManagement />
      {/* <Analytics /> */}
    </div>
  );
};

export default SellerDashboard;
