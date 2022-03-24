import { roll100 } from "../../roll";
export const magicItemTableH = () => {
  const x = roll100();
  let res;

  if (x === 100) {
    res = "Tome of understanding";
  } else if (x === 99) {
    res = "Tome of leadership and influence";
  } else if (x === 98) {
    res = "Tome of clear thought";
  } else if (x === 97) {
    res = "Armor of resistance (studded leather)";
  } else if (x === 96) {
    res = "Armor, +1 studded leather";
  } else if (x === 95) {
    res = "Armor of resistance (splint)";
  } else if (x === 94) {
    res = "Armor, +1 splint";
  } else if (x === 93) {
    res = "Spellguard shield";
  } else if (x === 92) {
    res = "Armor, +2 scale mail";
  } else if (x === 91) {
    res = "Oath bow";
  } else if (x === 90) {
    res = "Nine lives stealer";
  } else if (x === 89) {
    res = "Mirror of life trapping";
  } else if (x === 88) {
    res = "Manual of quickness of action";
  } else if (x === 87) {
    res = "Manual of golems";
  } else if (x === 86) {
    res = "Manual of gainful exercise";
  } else if (x === 85) {
    res = "Manual of bodily health";
  } else if (x === 84) {
    res = "Armor, +2 leather";
  } else if (x === 83) {
    res = "loun stone (strength)";
  } else if (x === 82) {
    res = "loun stone (leadership)";
  } else if (x === 81) {
    res = "loun stone (intellect)";
  } else if (x === 80) {
    res = "loun stone (insight)";
  } else if (x === 79) {
    res = "loun stone (fortitude)";
  } else if (x === 78) {
    res = "loun stone (agility)";
  } else if (x === 77) {
    res = "loun stone (absorption)";
  } else if (x === 76) {
    res = "Instrument of the bards (Anstruth harp)";
  } else if (x === 75) {
    res = "Horn ofValhalla (bronze)";
  } else if (x === 74) {
    res = "Helm of brilliance";
  } else if (x === 73) {
    res = "Frost brand";
  } else if (x === 72) {
    res = "Figurine of wondrous power (obsidian steed)";
  } else if (x === 71) {
    res = "Efreeti bottle";
  } else if (x === 70) {
    res = "Dwarven thrower";
  } else if (x === 69) {
    res = "Dwarven plate";
  } else if (x === 68) {
    res = "Dragon scale mail";
  } else if (x === 67) {
    res = "Demon armor";
  } else if (x === 66) {
    res = "Dancing sword";
  } else if (x === 65) {
    res = "Cloak of arachnida";
  } else if (x === 64) {
    res = "Armor, +2 chain shirt";
  } else if (x === 63) {
    res = "Armor, +2 chain mail";
  } else if (x === 62) {
    res = "Candle of invocation";
  } else if (x === 61) {
    res = "Armor of resistance (breastplate) ";
  } else if (x === 60) {
    res = "Armor, +1 breastplate";
  } else if (x === 59) {
    res = "Belt of frost (or stone) giant strength ";
  } else if (x === 58) {
    res = "Belt of fire giant strength";
  } else if (x === 57) {
    res = "Animated shield";
  } else if (x === 56) {
    res = "Adamantine armor (plate)";
  } else if (x === 55) {
    res = "Adamantine armor (half plate) ";
  } else if (x >= 53) {
    res = "Wand of the war mage, +3 ";
  } else if (x >= 51) {
    res = "Wand of polymorph";
  } else if (x >= 49) {
    res = "Sword of sharpness";
  } else if (x >= 47) {
    res = "Staff of thunder and lightning";
  } else if (x >= 45) {
    res = "Staff of striking";
  } else if (x >= 43) {
    res = "Staff of power";
  } else if (x >= 41) {
    res = "Staff of frost";
  } else if (x >= 39) {
    res = "Staff of fire";
  } else if (x >= 37) {
    res = "Shield, +3";
  } else if (x >= 35) {
    res = "Scimitar of speed";
  } else if (x >= 33) {
    res = "Rod of the pact keeper, +3";
  } else if (x >= 31) {
    res = "Rod of security";
  } else if (x >= 29) {
    res = "Rod of alertness";
  } else if (x >= 27) {
    res = "Rod of absorption";
  } else if (x >= 25) {
    res = "Robe of stars";
  } else if (x >= 23) {
    res = "Robe of scintillating colors ";
  } else if (x >= 21) {
    res = "Ring of telekinesis";
  } else if (x >= 19) {
    res = "Ring of shooting stars";
  } else if (x >= 17) {
    res = "Ring of regeneration";
  } else if (x >= 15) {
    res = "Crystal ball (very rare version) ";
  } else if (x >= 13) {
    res = "Carpet of flying";
  } else if (x >= 11) {
    res = "Amulet of the planes";
  } else {
    res = "Weapon , +3";
  }
  return res;
};
