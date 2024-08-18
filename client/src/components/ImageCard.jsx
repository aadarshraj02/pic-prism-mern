const ImageCard = ({ id, img, title, price, author, icon1, icon2 }) => {
  return (
    <div>
      <div className="rounded-lg bg-white shadow-lg p-2 h-fit mb-4 sm:mb-0">
        <div className="w-full h-[200px] overflow-hidden rounded-2xl">
          <img
            className="w-full h-full hover:scale-105 transition-all ease-linear duration-300 transform"
            src={img}
            alt={title}
          />
        </div>
        <p className="font-semibold text-white bg-black w-fit px-5 py-1 rounded-full text-sm mt-3">
          {"@" + author.charAt(0).toUpperCase() + author.slice(1)}
        </p>
        <div className="flex justify-between items-center mt-2">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-500">Price: ${price}</p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            {icon1}
            {icon2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
