import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdPhotos } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { FaList } from "react-icons/fa6";
import { setTab } from "../../store/slices/navSlice";
import { logout, login } from "../../store/slices/authSlice.js";
import { GoArrowSwitch } from "react-icons/go";
import axios from "axios";
import toast from "react-hot-toast";

const DashboardSidebar = () => {
  const author = useSelector((state) => state.auth.author);
  const sidebar = useSelector((state) => state.nav.sidebar);
  const tab = useSelector((state) => state.nav.tab);
  const navigate = useNavigate();

  const switchProfile = async () => {
    const res = await axios.get(import.meta.env.VITE_API_URL + "/api/switch", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    const data = await res.data;
    toast.success(data.message);
    dispatch(login(data));
    navigate(`/${data.role}/profile`);
  };

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <nav
      className={`fixed z-10 ${
        !sidebar == true
          ? "-translate-x-[500px] sm:translate-x-0"
          : "translate-x-0"
      } ease-in-out duration-300 flex sm:static text-lg font-semibold bg-white shadow-lg flex-col gap-2 w-fit min-h-screen p-3 list-none justify-between items-center`}
    >
      <div>
        <div className="bg-black my-5 w-fit rounded-full px-6 py-4 text-white">
          {author?.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col gap-2">
          {pathname === "/seller/profile" ? (
            <li
              className={`flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer ${
                tab === "photos-management" && "bg-black text-white"
              }`}
              onClick={() => dispatch(setTab("photos-management"))}
            >
              <IoMdPhotos /> Photos Management
            </li>
          ) : (
            <li
              className={`flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer ${
                tab === "photos-purchased" && "bg-black text-white"
              }`}
              onClick={() => dispatch(setTab("photos-purchased"))}
            >
              <IoMdPhotos /> Photos Purchased
            </li>
          )}
          <li
            className={`flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer ${
              tab === "analytics" && "bg-black text-white"
            }`}
            onClick={() => dispatch(setTab("analytics"))}
          >
            <SiGoogleanalytics /> Analytics
          </li>
          <li
            className={`flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer ${
              tab === "orders" && "bg-black text-white"
            }`}
            onClick={() => dispatch(setTab("orders"))}
          >
            <FaList /> Orders
          </li>
          <Link
            to="/"
            className="flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer"
          >
            <AiFillHome /> Home
          </Link>
          <button
            onClick={switchProfile}
            className="flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer"
          >
            <GoArrowSwitch />
            Switch to {pathname == "/seller/profile" ? "buyer" : "seller"}
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(logout());
        }}
        className="flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105"
      >
        <AiOutlineLogout /> Logout
      </button>
    </nav>
  );
};

export default DashboardSidebar;
