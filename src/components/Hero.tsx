import HeroImg from "../assets/img/slider-img.png";
const Hero = () => {
  return (
    <section className="bg-[url('./src/assets/img/hero-bg.jpg')] bg-cover min-h-[calc(100vh-64px)] flex items-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between w-full gap-9">
        <div className="text-center mt-4 md:mt-0">
          <h1 className="h2-bold">
            <span className="text-green-400">THE LATEST </span>
            FURNITURE
          </h1>
          <p className="p-regular-18 my-4 max-w-96 m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <div className="">
            <button className="py-2 px-9 bg-green-400  rounded-lg text-white">
              Read More{" "}
            </button>
            <button className="py-2 px-9 bg-gray-700 md:ml-2 mt-4 md:mt-0 rounded-lg text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className=" flex justify-center items-center bg-green-400 md:bg-white/0  md:bg-[url('./src/assets/img/hero-side-bg.png')] md:min-h-[calc(100vh-64px)]">
          <img src={HeroImg} className="w-60 h-80" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
