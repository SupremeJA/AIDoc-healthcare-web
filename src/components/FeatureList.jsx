import data from "../data/data.json";
import Button from "./Button";

function FeatureList() {
  return (
    <>
      {data.features.map((e, i) => (
        <div
          key={i}
          className={`flex flex-col-reverse ${i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} justify-between md:items-center gap-10 md:gap-0`}
        >
          <div className="flex flex-col items-start gap-6 md:w-[50%]">
            <div>
              <h2>{e.title}</h2>
              <p className="mt-4!">{e.text}</p>

              {e.points ? (
                <ul className="list-disc list-inside space-y-1 accent-bullets mt-4 ">
                  {e.points.map((point, i) => (
                    <li key={i} className="text-xs text-black font-body">
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex mt-4 gap-8">
                  {Object.entries(e.stats).map(([key, value]) => (
                    <span>
                      <h2 key={key} className="text-xl! ">
                        {value}
                      </h2>
                      <p>{key}</p>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <Button text="Start Live Chat" />
          </div>

          <div className="md:w-80">
            <img
              src="https://i.pinimg.com/736x/26/45/c5/2645c5de51ce043e2b8242b23f8b9fa1.jpg"
              className="rounded-2xl"
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default FeatureList;
