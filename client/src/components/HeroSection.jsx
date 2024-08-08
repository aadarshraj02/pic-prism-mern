import { IoIosSearch } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="sm:w-[60vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center">
      <form className="absolute flex justify-center items-center">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search your asset..."
          className="py-5 px-3 w-[80vw] text-xl sm:text-3xl mx-auto outline-none border-b-2"
        />
        <IoIosSearch />
      </form>
    </div>
  );
};

export default HeroSection;
