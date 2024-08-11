import { useSelector } from "react-redux";

const DashboardHeader = () => {
  const author = useSelector((state) => state.auth.author);
  return (
    <div>
      <div className="my-5 mx-8">
        <h1>Hello, {author?.charAt(0).toUpperCase() + author?.slice(1)}</h1>
      </div>
    </div>
  );
};

export default DashboardHeader;
