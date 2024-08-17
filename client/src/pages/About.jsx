const About = () => {
  return (
    <div className="mt-32 px-8">
      <h1 className="text-center text-3xl font-semibold mb-4">Pic Prism</h1>
      <div className="flex flex-col md:flex-row gap-10 w-full">
        <div className="w-full sm:w-1/2">
          <img
            className="w-full object-cover"
            src="/image.jpg"
            alt="collage image"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="text-3xl md:text-4xl text-center font-bold text-gray-700 mb-4">
            A Multi Vendor Platform Where You Can be a Buyer as well as Seller
          </h1>
          <p className="text-sm">
            A Platform where You can be a Buyer as well as Seller. Click Post
            and Earn! <span>Requirements?</span>Nothing Just create your account
            and start earning by posting your pictures and you can decide for
            how much you wanna sell your clicked pics. You will get all stats
            like how much you earned spend and all details Try and know more...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
