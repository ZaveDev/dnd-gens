import { roll } from "../../roll";
export const residence = () => {
  let res;
  const x = roll();

  if (x === 20) {
    res = "Lavish, guarded mansion";
  } else if (x === 19) {
    res = "Front for a secret cult";
  } else if (x === 18) {
    res = "Hidden slavers' den";
  } else if (x === 16 || x === 17) {
    res = "Orphanage";
  } else if (x >= 11) {
    res = "Crowded tenement";
  } else if (x === 9 || x === 10) {
    res = "Upper-class home";
  } else if (x >= 3) {
    res = "Middle-class home";
  } else {
    res = "Abandoned squat";
  }

  return res;
};
