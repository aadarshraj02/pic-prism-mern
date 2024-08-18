import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Pic-Prism</h2>
            <p className="text-gray-400">
              © 2024 Pic-Prism. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 items-center">
            <Link className=" text-xs text-zinc-300" to="/signup">
              Don&apos;t have an account Signup?
            </Link>
            <a
              href="https://github.com/aadarshraj02"
              target="_blank"
              className="hover:text-gray-400 hover:scale-110 transition-all duration-300 ease-linear text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/adarsh02/"
              target="_blank"
              className="hover:text-gray-400 hover:scale-110 transition-all duration-300 ease-linear text-2xl"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-raj-a5bab2234/"
              target="_blank"
              className="hover:text-gray-400 hover:scale-110 transition-all duration-300 ease-linear text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
