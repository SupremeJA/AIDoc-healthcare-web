import List from "../components/List";

function Cards() {
  return (
    <section className="grid! grid-cols-1! md:grid-cols-3! items-stretch! gap-4!">
      <List cards={true} />
    </section>
  );
}

export default Cards;
