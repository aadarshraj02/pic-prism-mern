import { useSelector } from "react-redux";

const DashboardSidebar = () => {
  const author = useSelector((state) => state.auth.author);
  return (
    <div className="flex text-lg font-semibold bg-white shadow-lg flex-col gap-2 w-fit min-h-screen p-3 list-none justify-between items-center">
      <div>
        <div className="bg-black my-5 w-fit rounded-full px-6 py-4 text-white">
          {author.charAt(0).toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
