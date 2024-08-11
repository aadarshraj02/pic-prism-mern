import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const liItems = [
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
    { name: "Login", route: "/login" },
    { name: "Sign up", route: "/signup" },
  ];

  return (
    <nav
      className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-5  top-0 left-0 right-0 shadow-md gap-1 sm:gap-0 z-30 bg-white ${
        pathname === "/seller/profile" || pathname === "/buyer/profile"
          ? "hidden"
          : "fixed"
      }`}
    >
      <div className="flex justify-between items-center">
        <img src="/picprismlogo.png" alt="picprismlogo" className="w-[50px]" />
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
