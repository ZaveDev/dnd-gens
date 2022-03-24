import { roll } from "../../roll";
export const notableTraits = () => {
  const res = [
    "Canals in place of streets",
    "Massive statue or monument",
    "Grand temple",
    "Large fortress",
    "Verdant parks and orchards",
    "River divides town",
    "Major trade center",
    "Headquarters ofa powerful family or guild ",
    "Population mostly wealthy",
    "Destitute , rundown",
    "Awful smell (tanneries, open sewers) ",
    "Center of trade for one specific good ",
    "Site of many battles",
    "Site of a mythic or magical event",
    "Important library or archive",
    "Worship of all gods banned",
    "Sinister reputation",
    "Notable library or academy",
    "Site of important tomb or graveyard ",
    "Built atop ancient ruins",
  ];
  const x = roll() - 1;

  return res[x];
};
