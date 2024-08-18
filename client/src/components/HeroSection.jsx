import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllPosts } from "../../store/slices/postSlice";

const HeroSection = () => {
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    try {
      const search = e.target.value;
      const res = await axios.get(
        import.meta.env.VITE_API_URL + `/api/post/search?search=${search}`
      );
      const { data } = await res.data;
      dispatch(setAllPosts(data));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="sm:w-[60vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center">
      <form className="absolute flex justify-center items-center">
        <input
          onChange={handleSearch}
          type="search"
          id="search"
          name="search"
          placeholder="Search your asset..."
          className="py-5 px-3 w-[80vw] md:w-[50vw] lg:w-[40vw] text-xl sm:text-3xl mx-auto outline-none border-b-2 bg-bgColor"
        />
        <IoIosSearch className="text-3xl sm:text-5xl text-gray-500 -ml-10" />
      </form>
    </div>
  );
};

export default HeroSection;
