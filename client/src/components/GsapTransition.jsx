import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import BuyerDashboard from "../pages/BuyerDashboard";
import SellerDashboard from "../pages/SellerDashboard";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import ProtectedRoutes from "../ProtectedRoutes";

const GsapTransition = () => {
  const nodeRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (nodeRef.current) {
      gsap.fromTo(
        nodeRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      );
    }
  }, [location]);

  return (
    <div ref={nodeRef}>
      <Toaster />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedRoutes children={<Login />} requiresAuth={false} />
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoutes children={<Signup />} requiresAuth={false} />
          }
        />
        <Route
          path="/buyer/profile"
          element={<ProtectedRoutes children={<BuyerDashboard />} />}
        />
        <Route
          path="/seller/profile"
          element={<ProtectedRoutes children={<SellerDashboard />} />}
        />
      </Routes>
    </div>
  );
};

export default GsapTransition;
