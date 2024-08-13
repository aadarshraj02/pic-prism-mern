import { useDispatch, useSelector } from "react-redux";
import DashboardHeader from "../DashboardHeader";
import ImageAdd from "../ImageAdd";
import toast from "react-hot-toast";
import { logout } from "../../../store/slices/authSlice";

const PhotoManagement = () => {
  const posts = useSelector((state) => state.posts.myPosts);
  const dispatch = useDispatch();

  const getMyPosts = async () => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "post/myPosts",
        {
          headers: {
            Authorization: "Bearer" + localStorage.get("accessToken"),
          },
        }
      );
      const {data}
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(logout());
    }
  };
  return (
    <div className="flex flex-col sm:flex-row">
      <div>
        <DashboardHeader />
        <ImageAdd />
      </div>
    </div>
  );
};

export default PhotoManagement;
