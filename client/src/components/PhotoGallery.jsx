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
          <div>
            <div>
              <h3>Image Title</h3>
              <p>Price: $0.99</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
