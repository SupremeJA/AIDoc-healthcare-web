import {
  ArrowUpRightIcon,
  HospitalIcon,
  CheckCircleIcon,
  HeadsetIcon,
} from "@phosphor-icons/react";
import data from "../data/data.json";

const ICONS = {
  HospitalIcon,
  CheckCircleIcon,
  ArrowUpRightIcon,
  HeadsetIcon,
};

function ServiceList() {
  return (
    <>
      {data.services.map((item) => {
        const Icon = ICONS[item.icon];
        return (
          <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-4 bg-gray-50 text-black rounded-2xl">
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2">
              {Icon && (
                <Icon
                  size={20}
                  className={`text-${item.color} bg-${item.color}/20 w-12 h-12 p-2 rounded-full`}
                />
              )}
              <div>
                <h3 className="text-sm">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>

            <ArrowUpRightIcon
              size={20}
              className="hidden md:block hover:bg-accent text-black w-10 h-10 p-2 rounded-full"
            />
          </div>
        );
      })}
    </>
  );
}

export default ServiceList;
