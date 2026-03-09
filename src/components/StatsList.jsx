import data from "../data/data.json";

function StatsList() {
  return (
    <div className="flex flex-row md:flex-row justify-between bg-green-500 w-full">
      {Object.entries(data.stats).map(([key, value]) => (
        <div className="p-6 rounded-xl bg-white">
          <h3>{key}</h3>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsList;
