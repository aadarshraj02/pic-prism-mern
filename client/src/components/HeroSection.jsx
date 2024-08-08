const HeroSection = () => {
  return (
    <div>
      <form className="sm:w-[60vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search your asset..."
          className=""
        />
      </form>
    </div>
  );
};

export default HeroSection;
