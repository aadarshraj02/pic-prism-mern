import { useEffect } from "react";
import toast from "react-hot-toast";
import { logout } from "../../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import DashboardHeader from "../DashboardHeader";
import ImageCard from "../ImageCard";
import { setMyPosts } from "../../../store/slices/postSlice";
import { IoArrowDownCircle } from "react-icons/io5";

const PhotosPurchased = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.myPosts);

  const getMyPosts = async () => {
    try {
      if (posts.length > 0) return;
      const res = await axios.get(
        import.meta.env.VITE_API_URL + "/api/post/myPosts",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      const { data } = await res.data;
      dispatch(setMyPosts(data));
    } catch (error) {
      toast.error("Failed to fetch photos", error);
      dispatch(logout());
    }
  };

  useEffect(() => {
    getMyPosts();
  }, []);

  const downloadImage = async (image, title) => {
    try {
      const response = await fetch(image);
      if (!response.ok) throw new Error("Failed to download image");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${title}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Error downloading image", error);
    }
  };

  return (
    <div>
      <DashboardHeader />
      <div className="mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cos-3 lg:grid-cols-4 gap-4">
        {posts?.map(({ _id, title, postUrl, author, price }) => (
          <ImageCard
            key={_id}
            title={title}
            price={price}
            author={author}
            img={postUrl}
            icon2={
              <IoArrowDownCircle
                title="Download Now"
                className="text-2xl  text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"
                onClick={() => downloadImage(postUrl, title)}
              />
            }
          />
        ))}
      </div>
    </div>
  );
};

export default PhotosPurchased;
