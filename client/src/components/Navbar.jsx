import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { login, logout } from "../../store/slices/authSlice";
import axios from "axios";
import { useEffect } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();

  const refreshToken = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_API_URL + "/refresh", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("refreshToken"),
        },
      });
      const data = await res.data;
      dispatch(login(data));
    } catch (error) {
      dispatch(logout());
      console.log(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refreshToken();
    }, 1000 * 60 * 13);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const liItems = [
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
    isAuthenticated && { name: "Profile", route: `/${role}/profile` },
    !isAuthenticated && { name: "Login", route: "/login" },
    !isAuthenticated && { name: "Sign Up", route: "/signup" },
  ].filter(Boolean);

  return (
    <nav
      className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 top-0 left-0 right-0 shadow-md gap-1 sm:gap-0 z-30 bg-white ${
        pathname === "/seller/profile" || pathname === "/buyer/profile"
          ? "hidden"
          : "fixed"
      }`}
    >
      <div className="flex justify-between items-center">
        <img src="/picprismlogo.png" alt="PicPrism logo" className="w-[50px]" />
        <Link to="/" className="font-bold text-3xl">
          PicPrism
        </Link>
      </div>
      <ul className="flex items-center gap-5 text-lg font-semibold text-gray-500 ml-5 sm:ml-0">
        {liItems.map((item, i) => (
          <li className="hover:text-black cursor-pointer sm:p-2" key={i}>
            <Link to={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
