import { useState } from "react";
import toast from "react-hot-toast";
import useUpload from "../hooks/useUpload";
import { useSelector } from "react-redux";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";

const ImageAdd = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const author = useSelector((state) => state.auth.author);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onUploadProgress = (progressEvent) =>
    setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));

  const addPost = async (e) => {
    e.preventDefault();
    try {
      const title = e.target.title.value;
      const price = e.target.price.value;

      if (!title || !price) return toast.error("Please fill all the fields");
      if (title.trim() === "" || price.trim() === "")
        return toast.error("Please fill all the fields");
      const { public_id, secure_url } = await useUpload({
        image,
        onUploadProgress,
      });
      if (!public_id || !secure_url) return toast.error("Image Upload Failed");

      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/post/create",
        {
          title,
          price,
          image: secure_url,
          publicId: public_id,
          author,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );

      const data = await res.data;
      if (data.success == true) {
        toast.success(data.message);
        e.target.reset();
        setImage(null);
        setProgress(0);
      }
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  return (
    <div className="p-5 mx-9 rounded-2xl shadow-md bg-white">
      <h2 className="text-xl font-bold">Add New Product</h2>
      <form className="grid grid-cols-1 gap-2 my-4" onSubmit={addPost}>
        <img
          className="w-[350px] h-[25vh] sm:h-[30vh] rounded-lg object-cover"
          src={`${
            image
              ? URL.createObjectURL(image)
              : " https://dummyimage.com/600x400/d4d4d4/fff.jpg&text=No+Image"
          }`}
          alt="dummy image"
        />
        {progress > 0 && (
          <ProgressBar
            completed={progress}
            bgColor="black"
            transitionTimingFunction="ease-in-out"
          />
        )}
        <div className="flex flex-col">
          <label htmlFor="image" className="font-bold">
            Image
          </label>
          <input
            onChange={handleImageChange}
            type="file"
            name="image"
            id="image"
            required
            className="rounded-lg border outline-none px-3 py-1 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="font-bold">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Image Title..."
            className="rounded-lg border outline-none px-3 py-1 mt-1"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="font-bold">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="For e.g. $5.99 "
            className="rounded-lg border outline-none px-3 py-1 mt-1"
            required
          />
        </div>
        <button
          type="submit"
          className="py-1 px-3 bg-black text-white font-semibold mt-2 rounded-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ImageAdd;
