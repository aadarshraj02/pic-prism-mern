import { useSelector } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { IoIosHeart, IoMdPhotos } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { FaList } from "react-icons/fa6";

const DashboardSidebar = () => {
  const author = useSelector((state) => state.auth.author);
  const { pathname } = useLocation();
  return (
    <nav className="flex text-lg font-semibold bg-white shadow-lg flex-col gap-2 w-fit min-h-screen p-3 list-none justify-between items-center">
      <div>
        <div className="bg-black my-5 w-fit rounded-full px-6 py-4 text-white">
          {author.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col gap-2">
          {pathname === "/seller/profile" ? (
            <li className="flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer">
              <IoMdPhotos /> Photos Management
            </li>
          ) : (
            <li className="flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer">
              <IoMdPhotos /> Photos Purchased
            </li>
          )}
          <li className="flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer">
            <SiGoogleanalytics /> Analytics
          </li>
          <li className="flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer">
            <FaList /> Orders
          </li>
          <li className="flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer">
            <IoIosHeart /> Favorites
          </li>
          <Link
            to="/"
            className="flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer"
          >
            <AiFillHome /> Home
          </Link>
        </div>
      </div>
      <button className="flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105">
        <AiOutlineLogout /> Logout
      </button>
    </nav>
  );
};

export default DashboardSidebar;
