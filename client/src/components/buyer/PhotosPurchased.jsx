import toast from "react-hot-toast";
import { logout } from "../../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import DashboardHeader from "../DashboardHeader";
import ImageCard from "../ImageCard";
import { RxDownload } from "react-icons/rx";
import { setMyPosts } from "../../../store/slices/postSlice";

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

  const downloadImage = async (image, title) => {
    try {
      const response = await fetch(image);
      if (!response.ok) throw new Error("Failed to download Image");
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
      toast.error("Failed to download Image", error);
    }
  };

  return (
    <div>
      <DashboardHeader />
      <div className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts?.map(({ _id, title, postUrl, author, price }) => (
          <ImageCard
            key={_id}
            title={title}
            author={author}
            price={price}
            icon2={
              <RxDownload
                onClick={() => downloadImage(postUrl, title)}
                title="Download Now"
                className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all duration-300 ease-linear "
              />
            }
          />
        ))}
      </div>
    </div>
  );
};

export default PhotosPurchased;
