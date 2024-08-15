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

const Analytics = () => {
  const { pathname } = useLocation();

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
            data={data}
          >
            <XAxis dataKey="title" hide />
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
        <p>Total Earned :</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-2 mb-10">
        <ExpenseCard />
      </div>
    </div>
  );
};

export default Analytics;
