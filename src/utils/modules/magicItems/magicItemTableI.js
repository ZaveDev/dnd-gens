import { roll100, roll12 } from "../../roll";
export const magicItemTableI = () => {
  const x = roll100();
  let res;

  if (x === 100) {
    res = "Tome of the stilled tongue";
  } else if (x === 99) {
    res = "Talisman of ultimate evil";
  } else if (x === 98) {
    res = "Talisman of the sphere";
  } else if (x === 97) {
    res = "Talisman of pure good";
  } else if (x === 96) {
    res = "Sphere of annihilation";
  } else if (x === 95) {
    res = "Ring of water elemental command";
  } else if (x === 94) {
    res = "Ring of three wishes";
  } else if (x === 93) {
    res = "Ring of fire elemental command";
  } else if (x === 92) {
    res = "Ring of earth elemental command";
  } else if (x === 91) {
    res = "Ring of air elemental command";
  } else if (x === 90) {
    res = "Plate armor of resistance";
  } else if (x === 89) {
    res = "Plate armor of etherealness";
  } else if (x === 88) {
    res = "loun stone (regeneration)";
  } else if (x === 87) {
    res = "loun stone (mastery)";
  } else if (x === 86) {
    res = "loun stone (greater absorption)";
  } else if (x === 85) {
    res = "Instrument of the bards (OIIamh harp) ";
  } else if (x === 84) {
    res = "Horn ofValhalla (iron)";
  } else if (x === 83) {
    res = "Armor of resistance (half plate)";
  } else if (x === 82) {
    res = "Efreeti chain";
  } else if (x === 81) {
    res = "Deck of many things";
  } else if (x === 80) {
    res = "Cubic gate";
  } else if (x === 79) {
    res = "Belt of storm giant strength";
  } else if (x === 78) {
    res = "Armor of invulnerability";
  } else if (x === 77) {
    res = "Apparatus of Kwalish";
  } else if (x === 76) {
    const y = roll12();
    if (y === 12) {
      res = "Armor, +3 plate";
    } else if (y === 11) {
      res = "Armor, +3 half plate";
    } else if (y >= 9) {
      res = "Armor, +3 splint";
    } else if (y >= 7) {
      res = "Armor, +3 breastplate";
    } else if (y >= 5) {
      res = "Armor, +3 studded leather";
    } else if (y >= 3) {
      res = "Armor, +2 plate";
    } else {
      res = "Armor, +2 half plate";
    }
  } else if (x >= 74) {
    res = " Well of many worlds";
  } else if (x >= 72) {
    res = " Armor, +2 studded leather";
  } else if (x >= 70) {
    res = " Armor, +2 splint";
  } else if (x >= 68) {
    res = " Scarab of protection";
  } else if (x >= 66) {
    res = " Armor, +1 scale mail";
  } else if (x >= 64) {
    res = " Rod of resurrection";
  } else if (x >= 62) {
    res = " Robe of the archmagi";
  } else if (x >= 60) {
    res = " Armor, +1 plate";
  } else if (x >= 58) {
    res = " Armor, +3 leather";
  } else if (x >= 56) {
    res = " Iron flask";
  } else if (x >= 54) {
    res = "Armor, +1 half plate";
  } else if (x >= 52) {
    res = " Crystal ball (legendary version) ";
  } else if (x >= 50) {
    res = " Cloak of invisibility";
  } else if (x >= 48) {
    res = " Armor, +3 chain shirt";
  } else if (x >= 46) {
    res = " Armor, +3 chain mail";
  } else if (x >= 44) {
    res = "Armor, +2 breastplate";
  } else if (x >= 42) {
    res = "Belt of cloud giant strength ";
  } else if (x >= 39) {
    res = "Vorpal sword";
  } else if (x >= 36) {
    res = "Staff of the magi";
  } else if (x >= 33) {
    res = "Rod of lordly might";
  } else if (x >= 30) {
    res = "Ring of spell turning";
  } else if (x >= 27) {
    res = "Ring of invisibility";
  } else if (x >= 24) {
    res = "Ring of djinni summoning";
  } else if (x >= 21) {
    res = "Holy avenger";
  } else if (x >= 16) {
    res = "Sword of answering";
  } else if (x >= 11) {
    res = "Luck blade";
  } else if (x >= 6) {
    res = "Hammer of thunderbolts";
  } else {
    res = "Defender";
  }

  return res;
};
