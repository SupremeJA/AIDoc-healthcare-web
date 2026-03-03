import {
  ArrowUpRightIcon,
  HospitalIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import data from "../data/data.json";

const ICONS = {
  HospitalIcon,
  CheckCircleIcon,
};

function ServiceList() {
  return (
    <div>
      {data.services.map((item) => {
        const Icon = ICONS[item.icon];
        return (
          <div className="flex md:flex-row items-center gap-20 p-4 bg-gray-50 text-black rounded-2xl">
            <div className="flex justify-center items-center gap-2">
              {Icon && (
                <Icon className="text-accent bg-lime-100 p-1 w-13 h-full rounded-full" />
              )}
              <div>
                <h3 className="text-sm">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>

            <ArrowUpRightIcon
              size={20}
              className="hover:bg-accent text-black w-10 h-10 p-2 rounded-full"
            />
          </div>
        );
      })}
    </div>
  );
}

export default ServiceList;
