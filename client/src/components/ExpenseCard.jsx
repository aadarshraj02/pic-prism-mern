import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const ExpenseCard = () => {
  return (
    <div>
      <div className="w-[83vw] sm:w-[80vw] ml-8 p-2 bg-white rounded-2xl shadow-md flex flex-col justify-between items-center gap-5">
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
      </div>
    </div>
  );
};

export default ExpenseCard;
