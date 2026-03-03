import {
  ArrowUpRightIcon,
  HospitalIcon,
  CheckCircleIcon,
  HeadsetIcon,
  FolderIcon,
  UserFocusIcon,
  ActivityIcon,
  WarningIcon,
  ChartBarIcon,
} from "@phosphor-icons/react";
import data from "../data/data.json";

const ICONS = {
  HospitalIcon,
  CheckCircleIcon,
  ArrowUpRightIcon,
  HeadsetIcon,
  FolderIcon,
  UserFocusIcon,
  ActivityIcon,
  WarningIcon,
  ChartBarIcon,
};

const colorClasses = {
  purple: {
    text: "text-purple-500",
    bg: "bg-purple-500/20",
    cardbg: "bg-purple-500/10",
  },
  blue: {
    text: "text-blue-500",
    bg: "bg-blue-500/20",
    cardbg: "bg-blue-500/10",
  },
  orange: {
    text: "text-orange-500",
    bg: "bg-orange-500/20",
    cardbg: "bg-orange-500/10",
  },
  accent: {
    text: "text-accent",
    bg: "bg-accent/20",
    cardbg: "bg-accent/10",
  },
  green: {
    text: "text-green-500",
    bg: "bg-green-500/20",
    cardbg: "bg-green-500/10",
  },
  red: {
    text: "text-red-700",
    bg: "bg-red-700/20",
    cardbg: "bg-red-700/10",
  },
};

function List({ cards }) {
  return (
    <>
      {cards
        ? data.cards.map((item, index) => {
            const Icon = ICONS[item.icon];
            const color = colorClasses[item.color] ?? colorClasses.blue; // fallback

            return (
              <div
                key={index}
                className={`flex flex-col gap-7 p-8 ${color.cardbg} text-black rounded-2xl`}
              >
                {Icon && (
                  <div
                    className={`w-12 h-12 rounded-full ${color.bg} flex items-center justify-center`}
                  >
                    <Icon size={30} className={color.text} />
                  </div>
                )}
                <div>
                  <h2>{item.title}</h2>
                  <p className="mt-4!">{item.text}</p>
                </div>
              </div>
            );
          })
        : data.services.map((item, index) => {
            const Icon = ICONS[item.icon];
            const color = colorClasses[item.color] ?? colorClasses.blue; // fallback

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between p-8 md:p-4 bg-gray-50 text-black rounded-2xl"
              >
                <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2">
                  {Icon && (
                    <div
                      className={`w-12 h-12 rounded-full ${color.bg} flex items-center justify-center`}
                    >
                      <Icon size={30} className={color.text} />
                    </div>
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

export default List;
