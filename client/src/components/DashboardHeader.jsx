import { useSelector } from "react-redux";

const DashboardHeader = () => {
  const author = useSelector((state) => state.auth.author);
  const role = useSelector((state) => state.auth.role);
  return (
    <div>
      <div className="my-5 mx-8">
        <h1 className="text-3xl font-bold">
          Hello, {author?.charAt(0).toUpperCase() + author?.slice(1)}
        </h1>
        <p>
          Welcome to your {role.charAt(0).toUpperCase() + role.slice(1)}{" "}
          Dashbaord
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;
