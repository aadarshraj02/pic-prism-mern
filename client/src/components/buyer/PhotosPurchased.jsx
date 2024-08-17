import toast from "react-hot-toast";
import { logout } from "../../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const PhotosPurchased = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state / posts.myPosts);

  const getMyPosts = async () => {
    try {
      if (posts.length > 0) return;
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "/post/myPosts",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("AccessToken"),
          },
        }
      );
      const { data } = await res.data;
    } catch (error) {
      toast.error("Failed to fetch Photos", error);
      dispatch(logout());
    }
  };

  useEffect(() => {
    getMyPosts();
  }, []);

  return <div></div>;
};

export default PhotosPurchased;
