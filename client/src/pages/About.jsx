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
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <div className="sm:w-1/2">
              <p className="mt-2 text-sm">
                <span className="text-gray-700 text-xl font-semibold">
                  As a Seller:
                </span>{" "}
                <br />
                After signing up as a Seller on your dashboard you can Upload
                your assets and then fill the form in which you have to provide
                title and set your price. You will also get details like order
                details and analytics graph for this week month and this year.
              </p>
              <p className="mt-2 text-sm">
                <span className="text-gray-700 text-xl font-semibold">
                  As a Buyer:
                </span>{" "}
                <br />
                After signing up as a Buyer on your dashboard you can purchase
                any assets and then it will be displayed in your profile. You
                can also check your analytics like how much you spend this week,
                month and this Year and you will also get your all order details.
              </p>
            </div>
            <div className="w-1/2">
              <img
                className="w-full object-cover hidden md:block"
                src="/image2.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
