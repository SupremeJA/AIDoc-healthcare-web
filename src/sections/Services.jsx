import List from "../components/List";

function Services() {
  return (
    // Check later
    <section>
      <header className="text-center">
        <h2>Our Service</h2>
        <p className="mt-2">Explore Expert Insights and Health Tips</p>
      </header>

      <div className="flex flex-col gap-3 ">
        <List />
      </div>
    </section>
  );
}

export default Services;
