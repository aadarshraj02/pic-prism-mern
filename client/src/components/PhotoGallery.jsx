import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>
      <div>
        <div className="rounded-lg bg-white shadow-lg p-2">
          <div className="w-full h-[200px] overflow-hidden rounded-2xl ">
            <img
              className="w-full h-full hover:scale-105 transition-all ease-linear duration-300 transform"
              src="https://plus.unsplash.com/premium_photo-1722586209835-46ae3736ec12?q=80&w=1535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
          </div>
          <p className="font-semibold text-white bg-black w-fit px-5 py-1 rounded-full text-sm mt-3">
            @AuthorName
          </p>
          <div className="flex justify-between items-center mt-2">
            <div>
              <h3 className="text-lg font-semibold">Image Title</h3>
              <p className="text-gray-500">Price: $0.99</p>
            </div>
            <div className="flex gap-5 justify-center items-center">
              <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
              <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
