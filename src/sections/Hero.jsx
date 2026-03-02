import Searchbar from "../components/Searchbar";

function Hero() {
  return (
    <section className="w-full mt-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4 px-5">
        <div className="bg-accent/80 text-secondary text-balance text-sm font-medium px-3 py-2 rounded-full">
          AI Healthcare Service
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="text-black text-4xl font-heading font-semibold">
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
      </div>
    </section>
  );
}

export default Hero;
