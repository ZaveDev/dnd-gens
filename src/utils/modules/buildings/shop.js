import { roll } from "../../roll";
export const shop = () => {
  const shops = [
    "Pawnshop",
    "Herbs/incense",
    "Fruits/vegetables",
    "Dried meats",
    "Pottery",
    "Undertaker",
    "Books",
    "Moneylender",
    "Weapons/armor",
    "Chandler",
    "Smithy",
    "Carpenter",
    "Weaver",
    "Jeweler",
    "Baker",
    "Mapmaker",
    "Tailor",
    "Ropemaker",
    "Mason",
    "Scribe",
  ];
  const x = roll() - 1;

  return shops[x];
};
