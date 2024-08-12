const ImageAdd = () => {
  return (
    <div className="p-5 mx-9 rounded-2xl shadow-md bg-white">
      <h2 className="text-xl font-bold">Add New Product</h2>
      <form className="grid grid-cols-1 gap-2 my-4">
        <img
          className="w-[350px] h-[25vh] sm:h-[30vh] rounded-lg object-cover"
          src={`https://dummyimage.com/600x400/d4d4d4/fff&text=No+Image`}
          alt="dummy image"
        />
        <div className="flex flex-col">
          <label htmlFor="image" className="font-bold">
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="rounded-lg border outline-none px-3 py-1 mt-1"
          />
        </div>
      </form>
    </div>
  );
};

export default ImageAdd;
