import { roll100 } from "../../roll";
export const magicItemTableB = () => {
  const x = roll100();
  let res;

  if (x === 100) {
    res = "Wand of secrets";
  } else if (x === 99) {
    res = " Wand of magic detection ";
  } else if (x === 98) {
    res = " Saddle of the cavalier ";
  } else if (x === 97) {
    res = " Rope of climbing";
  } else if (x === 96) {
    res = " Robe of useful items ";
  } else if (x === 95) {
    res = " Ring of swimming";
  } else if (x === 94) {
    res = " Potion of poison";
  } else if (x === 93) {
    res = " Mithral armor";
  } else if (x === 92) {
    res = " Mariner's armor";
  } else if (x === 91) {
    res = " Lantern of revealing";
  } else if (x === 90) {
    res = " Immovable rod";
  } else if (x === 89) {
    res = " Helm of comprehending languages ";
  } else if (x === 88) {
    res = " Goggles of night";
  } else if (x === 87) {
    res = " Driftglobe";
  } else if (x === 86) {
    res = " Cloak of the manta ray ";
  } else if (x === 85) {
    res = " Cap of water breathing ";
  } else if (x === 84) {
    res = " Alchemy jug";
  } else if (x >= 82) {
    res = "Philter of love";
  } else if (x >= 80) {
    res = "Elemental gem";
  } else if (x >= 78) {
    res = "Dust of sneezing and choking ";
  } else if (x >= 76) {
    res = "Dust ·of dryness";
  } else if (x >= 74) {
    res = "Dust of disappearance ";
  } else if (x >= 71) {
    res = "Oil of slipperiness ";
  } else if (x >= 68) {
    res = "Keoghtom's ointment ";
  } else if (x >= 65) {
    res = "Bag of holding ";
  } else if (x >= 60) {
    res = "Spell scroll (3rd level) ";
  } else if (x >= 55) {
    res = "Spell scroll (2nd level)";
  } else if (x >= 50) {
    res = "Potion of water breathing ";
  } else if (x >= 45) {
    res = "Potion of growth";
  } else if (x >= 40) {
    res = "Potion of hill giant strength ";
  } else if (x >= 35) {
    res = "Potion of animal friendship ";
  } else if (x >= 30) {
    res = "Ammunition , +1";
  } else if (x >= 23) {
    res = "Potion of resistance ";
  } else if (x >= 16) {
    res = "Potion of fire breath ";
  } else {
    res = "Potion of greater healing";
  }

  return res;
};
