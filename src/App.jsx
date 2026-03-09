import Nav from "./components/Nav";
import Cards from "./sections/Cards";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Stats from "./sections/Stats";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Cards />
      <Features />

      <section className=" bg-red-500 mx-none! w-full! max-w-full! px-0!">
        <Stats />
      </section>
    </>
  );
}

export default App;
