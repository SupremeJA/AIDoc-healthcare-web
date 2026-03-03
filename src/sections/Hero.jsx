import Searchbar from "../components/Searchbar";
import data from "../data/data.json";

function Hero() {
  return (
    <section className="mt-8!">
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

      <div className="flex justify-center flex-col md:flex-row md:w-50 gap-4">
        {data.heroimages.map((e, i) => (
          <img src={e} key={i} className="rounded-xl" />
        ))}
      </div>
    </section>
  );
}

export default Hero;
