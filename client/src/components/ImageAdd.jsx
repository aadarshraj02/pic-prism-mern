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
