import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { login } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      toast.error("Email is required");
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password === "") {
      toast.error("Password is required");
      return;
    } else if (!passwordRegex.test(password)) {
      toast.error("Invalid Password");
      return;
    }

    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/login", {
        email,
        password,
      });
      const data = await res.data;
      toast.success(data.message);
      dispatch(login(data));
      navigate(`/${data.role}/profile`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="mt-20 sm:mt-10 h-[90vh] flex items-center justify-center w-full ">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]">
        <h1 className="text-2xl font-bold text-center mb-4">
          Let&apos;s Connect
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter any Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <Link className="text-xs text-gray-500">Forgot Password?</Link>
            <Link className=" text-xs text-black" to="/signup">
              Don&apos;t have an account Signup?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-black"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
