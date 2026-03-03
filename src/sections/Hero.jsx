import Searchbar from "../components/Searchbar";

function Hero() {
  return (
    <section className="mt-8 max-w-4xl mx-auto flex flex-col items-center justify-center gap-4 px-5">
      <div className="bg-accent/80 text-secondary text-balance text-sm font-medium px-3 py-2 rounded-full">
        AI Healthcare Service
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="text-black text-3xl font-heading font-semibold ">
          <h1>
            Experience Smart, AI-Driven{" "}
            <span className="text-accent">Healthcare</span>
          </h1>
          <h1>for Faster, Better Care!</h1>
        </div>
        <p className="text-gray-700 text-sm mt-3 md:w-[30%] lg:w-[65%] ">
          Get real-time medical advice, accurate diagnostics, and personalized
          health insights powered by advanced AI technology - accessible
          anytime, anywhere.
        </p>

        <Searchbar />
      </div>

      <div className="flex justify-center flex-col md:flex-row w-50 ">
        <img src="https://i.pinimg.com/1200x/36/e2/75/36e275e0148c1ef01e77f07abed5705a.jpg" />
        <img src="https://i.pinimg.com/736x/26/45/c5/2645c5de51ce043e2b8242b23f8b9fa1.jpg" />
        <img src="https://i.pinimg.com/1200x/36/e2/75/36e275e0148c1ef01e77f07abed5705a.jpg" />
      </div>
    </section>
  );
}

export default Hero;
