import ImageCard from "./ImageCard";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setAllPosts } from "../../store/slices/postSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts.allPosts);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const getAllImages = async () => {
    if (posts.length > 0) return;

    const res = await axios.get(import.meta.env.VITE_API_URL + "/post/getAll");
    const { data } = await res.data;
    console.log(data);
    dispatch(setAllPosts(data));
  };

  const purchaseImage = async (price, id, postUrl, author, title) => {
    if (!isAuthenticated) {
      toast.error("Please login to purchase asset");
      navigate("/login");
      return;
    }

    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/payment/generate",
        {
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );
      const { data } = await res.data;
      await handlePaymentVerify(data, id, postUrl, author, title, price);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handlePaymentVerify = async (
    data,
    id,
    postUrl,
    author,
    title,
    price
  ) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Adarsh Raj",
      order_id: data.id,
      theme: {
        color: "#5f63b8",
      },
      handler: async (response) => {
        try {
          const res = await axios.post(
            import.meta.env.VITE_API_URL + "/payment/verify",
            {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              postId: id,
              postUrl,
              author,
              title,
              price,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }
          );
          const data = await res.data;
          toast.success(data.message);
        } catch (error) {
          toast.error(error.response.data.message);
        }
      },
    };
    const razorpayWindow = new window.Razorpay(options);
    razorpayWindow.open();
  };

  const addToFavorites = async (postId) => {
    if (!isAuthenticated) {
      toast.error("Please login to add to favorites");
      navigate("/login");
      return;
    }

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/post/addToFavorites/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      toast.success("Added to Favorites");
    } catch (error) {
      toast.error("Failed to add to Favorites");
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);

  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mb-20">
        {posts?.map(({ _id, title, image, price, author }) => (
          <ImageCard
            key={_id}
            id={_id}
            title={title}
            author={author}
            img={image}
            price={price}
            icon1={
              <FaShoppingCart
                title="Cart"
                onClick={() => purchaseImage(price, _id, image, author, title)}
                className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"
              />
            }
            icon2={
              <IoIosHeart
                title="Add to Favorites"
                onClick={() => addToFavorites(_id)}
                className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"
              />
            }
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
