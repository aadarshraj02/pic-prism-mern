import { useDispatch, useSelector } from "react-redux";
import DashboardHeader from "../DashboardHeader";
import ImageAdd from "../ImageAdd";
import toast from "react-hot-toast";
import { logout } from "../../../store/slices/authSlice";
import { setMyPosts } from "../../../store/slices/postSlice";
import axios from "axios";
import { useEffect } from "react";
import ImageCard from "../../components/ImageCard";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const PhotoManagement = () => {
  const posts = useSelector((state) => state.posts.myPosts);
  const dispatch = useDispatch();

  const getMyPosts = async () => {
    try {
      if (posts.length > 0) return;
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "post/myPosts",
        {
          headers: {
            Authorization: "Bearer" + localStorage.get("accessToken"),
          },
        }
      );
      const { data } = await res.data;
      dispatch(setMyPosts(data));
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(logout());
    }
  };

  useEffect(() => {
    getMyPosts();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row">
      <div>
        <DashboardHeader />
        <ImageAdd />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5 bg-transparent sm:bg-white p-5 w-[90vw] sm:w-[55vw] sm:h-[95vh] sm:overflow-y-scroll rounded-lg mx-auto sm:mx-0">
        {posts?.map(({ _id, title, image, author, price }) => (
          <ImageCard
            key={_id}
            id={_id}
            title={title}
            img={image}
            author={author}
            price={price}
            icon1={<FaEdit />}
            icon2={<MdDelete />}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoManagement;
