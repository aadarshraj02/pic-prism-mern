import DashboardHeader from "../components/DashboardHeader";
import { useLocation } from "react-router-dom";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import ExpenseCard from "./ExpenseCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Analytics = () => {
  const { pathname } = useLocation();
  const [tillNow, setTillNow] = useState([]);
  const [thisYear, setThisYear] = useState([]);
  const [thisMonth, setThisMonth] = useState([]);
  const [thisWeek, setThisWeek] = useState([]);

  const getPostsByDateRange = async () => {
    const res = await axios.get(
      import.meta.env.VITE_API_URL + "/post/getPostByDateRange",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        withCredentials: true,
      }
    );
    const { data } = await res.data;
    setTillNow(data.tillNow);
    setThisYear(data.thisYear);
    setThisMonth(data.thisMonth);
    setThisWeek(data.thisWeek);
  };
  useEffect(() => {
    getPostsByDateRange();
  }, []);

  const calculateTotalForSeller = (data) => {
    const value = data.reduce((acc, current) => {
      const price = current.price || 0;
      const purchases = current.purchasedBy ? current.purchasedBy.length : 0;
      return acc + price * purchases;
    }, 0);
    return value;
  };

  const calculateTotalForBuyer = (data) =>
    data.reduce((acc, current) => acc + current.price, 0);

  return (
    <div>
      <DashboardHeader />
      <h1 className="text-2xl font-semibold mb-5 ml-8">Analytics</h1>
      <h2 className="text-2xl font-semibold my-5 ml-8">
        {pathname == "/seller/profile" ? "Uploaded" : "Purchased"} This Year
      </h2>
      <div className="w-[83vw] sm:w-[25vw] ml-8 p-2 bg-white rounded-2xl shadow-md flex flex-col justify-between items-center gap-5">
        <ResponsiveContainer width="100%" height={150}>
          <LineChart
            margin={{
              top: 20,
              bottom: -50,
              left: -61,
            }}
            data={thisYear}
          >
            <XAxis dataKey="price" hide />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amt"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
        <p>
          Total {pathname == "seller/profile" ? "Earned" : "Spent"} : ${" "}
          {pathname == "/seller/profile"
            ? calculateTotalForSeller(thisYear)
            : calculateTotalForBuyer(thisYear)}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-2 mb-10">
        <ExpenseCard />
      </div>
    </div>
  );
};

export default Analytics;
