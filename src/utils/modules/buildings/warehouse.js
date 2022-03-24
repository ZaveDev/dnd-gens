import { roll } from "../../roll";
export const warehouse = () => {
  const x = roll();
  let res;

  if (x === 20) {
    res = "Secret smuggler's den";
  } else if (x === 18 || x === 19) {
    res = "Goods from a distant land";
  } else if (x === 16 || x === 17) {
    res = "Weapons/armor";
  } else if (x === 15) {
    res = "Live animals";
  } else if (x >= 11) {
    res = "Bulk goods";
  } else if (x >= 7) {
    res = "Cheap goods";
  } else if (x === 5 || x === 6) {
    res = "Heavily guarded, expensive goods";
  } else {
    res = "Empty or abandoned";
  }

  return res;
};
