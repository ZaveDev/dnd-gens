import { roll } from "../../roll";
import { religious } from "./religious";
import { warehouse } from "./warehouse";
import { residence } from "./residence";
import { shop } from "./shop";
import { tavern } from "./tavern";
export const choose = (choice) => {
  let res;
  switch (choice) {
    case "Warehouse":
      res = warehouse();
      break;

    case "Residence":
      res = residence();
      break;

    case "Religious":
      res = religious();
      break;

    case "Shop":
      res = shop();
      break;

    case "Tavern":
      res = tavern();
      break;

    default:
      break;
  }
  return res;
};

const buildingType = () => {
  let res;
  const x = roll();

  if (x >= 18) {
    res = "Shop";
  } else if (x === 16 || x === 17) {
    res = "Warehouse";
  } else if (x >= 13) {
    res = "Tavern";
  } else if (x === 11 || x === 12) {
    res = "Religious";
  } else {
    res = "Residence";
  }

  return res;
};

export const buildings = () => {
  const num = roll() + 2;
  const buildingTypes = [];
  const buildings = [];

  for (let i = 0; i < num; i++) {
    buildingTypes.push(buildingType());
  }

  buildingTypes.forEach((type) => {
    let res = {
      type,
      choice: choose(type),
    };

    buildings.push(res);
  });
  return buildings;
};
