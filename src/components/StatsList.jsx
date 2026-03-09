import data from "../data/data.json";

function StatsList() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mx-auto ">
      {Object.entries(data.stats).map(([key, value]) => (
        <div className="p-6 rounded-xl bg-white text-center">
          <h3>{key}</h3>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsList;
