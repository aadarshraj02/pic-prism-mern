import { useSelector } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { IoMdPhotos } from "react-icons/io";

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
              Photos Management <IoMdPhotos />
            </li>
          ) : (
            <li className="flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105 cursor-pointer">
              Photos Purchased <IoMdPhotos />
            </li>
          )}
        </div>
      </div>
      <button className="flex items-center justify-start gap-2 w-full rounded-lg px-2 hover:bg-black hover:text-white transition-all ease-linear duration-300 hover:scale-105">
        Logout
        <AiOutlineLogout />
      </button>
    </nav>
  );
};

export default DashboardSidebar;
