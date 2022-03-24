import { roll } from "../../roll";
export const knownFor = () => {
  const res = [
    "Delicious cuisine",
    "Rude people",
    "Greedy merchants",
    "Artists and writers ",
    "Great hero/savior",
    "Flowers",
    "Hordes of beggars",
    "Tough warriors",
    "Dark magic",
    "Decadence",
    "Piety",
    "Gambling",
    "Godlessness",
    "Education",
    "Wines",
    "High fashion",
    "Political",
    "intrigue",
    "Powerful guilds",
    "Strong drink",
    "Patriotism",
  ];
  const x = roll() - 1;

  return res[x];
};
