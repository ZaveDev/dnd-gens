import { roll100 } from "../../roll";
export const magicItemTableE = () => {
  const x = roll100();
  let res;

  if (x >= 99) {
    res = "Sovereign glue";
  } else if (x >= 94) {
    res = "Arrow of slaying";
  } else if (x >= 86) {
    res = "Universal solvent";
  } else if (x >= 71) {
    res = "Spell scroll (9th level) ";
  } else if (x >= 56) {
    res = "Potion of supreme healing ";
  } else if (x >= 31) {
    res = "Potion of storm giant strength ";
  } else {
    res = "Spell scroll (8th level)";
  }

  return res;
};
