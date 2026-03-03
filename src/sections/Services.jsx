import ServiceList from "../components/ServiceList";

function Services() {
  return (
    // Check later
    <section className="flex justify-center items-center flex-col gap-8 max-w-4xl mx-auto px-5 mt-20">
      <header className="text-center">
        <h2>Our Service</h2>
        <p className="mt-2">Explore Expert Insights and Health Tips</p>
      </header>

      <div className="flex flex-col gap-3 ">
        <ServiceList />
      </div>
    </section>
  );
}

export default Services;
