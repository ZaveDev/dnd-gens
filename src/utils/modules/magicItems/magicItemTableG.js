import { roll100, roll8 } from "../../roll";
export const magicItemTableG = () => {
  const x = roll100();
  let res;
  if (x === 100) {
    res = "Wings of flying";
  } else if (x === 99) {
    res = "Wand of wonder";
  } else if (x === 98) {
    res = "Wand of the war mage, +2";
  } else if (x === 97) {
    res = "Wand of paralysis";
  } else if (x === 96) {
    res = "Wand of lightning bolts";
  } else if (x === 95) {
    res = "Wand of fireballs";
  } else if (x === 94) {
    res = "Wand of fear";
  } else if (x === 93) {
    res = "Wand of enemy detection";
  } else if (x === 92) {
    res = "Wand of binding";
  } else if (x === 91) {
    res = "Vicious weapon";
  } else if (x === 90) {
    res = "Tentacle rod";
  } else if (x === 89) {
    res = "Sword of wounding";
  } else if (x === 88) {
    res = "Sword of life stealing";
  } else if (x === 87) {
    res = "Sun blade";
  } else if (x === 86) {
    res = "Stone of controlling earth elementals ";
  } else if (x === 85) {
    res = "Staff of withering";
  } else if (x === 84) {
    res = "Staff of the woodlands";
  } else if (x === 83) {
    res = "Staff of swarming insects";
  } else if (x === 82) {
    res = "Staff of healing";
  } else if (x === 81) {
    res = "Staff of charming";
  } else if (x === 80) {
    res = "Shield of missile attraction";
  } else if (x === 79) {
    res = "Shield, +2";
  } else if (x === 78) {
    res = "Armor of resistance (scale mail)";
  } else if (x === 77) {
    res = "Armor, +1 scale mail";
  } else if (x === 76) {
    res = "Rope of entanglement";
  } else if (x === 75) {
    res = "Rod of the pact keeper, +2";
  } else if (x === 74) {
    res = "Rod of rulership";
  } else if (x === 73) {
    res = "Robe of eyes";
  } else if (x === 72) {
    res = "Ring of X-ray vision";
  } else if (x === 71) {
    res = "Ring of the ram";
  } else if (x === 70) {
    res = "Ring of spell storing";
  } else if (x === 69) {
    res = "Ring of resistance";
  } else if (x === 68) {
    res = "Ring of protection";
  } else if (x === 67) {
    res = "Ring of free action";
  } else if (x === 66) {
    res = "Ring of feather falling";
  } else if (x === 65) {
    res = "Ring of evasion";
  } else if (x === 64) {
    res = "Ring of animal influence";
  } else if (x === 63) {
    res = "Peri apt of proof against poison";
  } else if (x === 62) {
    res = "Necklace of prayer beads";
  } else if (x === 61) {
    res = "Mantle of spell resistance";
  } else if (x === 60) {
    res = "Mace of terror";
  } else if (x === 59) {
    res = "Mace of smiting ";
  } else if (x === 58) {
    res = "Mace of disruption";
  } else if (x === 57) {
    res = "Armor of resistance (leather)";
  } else if (x === 56) {
    res = "Armor, +1 leather";
  } else if (x === 55) {
    res = "Iron bands of Bilarro";
  } else if (x === 54) {
    res = "loun stone (sustenance) ";
  } else if (x === 53) {
    res = "loun stone (reserve)";
  } else if (x === 52) {
    res = "loun stone (protection)";
  } else if (x === 51) {
    res = "loun stone (awareness)";
  } else if (x === 50) {
    res = "Instrument of the bards (Cii lyre)";
  } else if (x === 49) {
    res = "Instrument of the bards (Canaith mandolin)";
  } else if (x === 48) {
    res = "Horn of Valhalla (silver or brass)";
  } else if (x === 47) {
    res = "Horn of blasting";
  } else if (x === 46) {
    res = "Helm of teleportation";
  } else if (x === 45) {
    res = "Clamoured studded leather";
  } else if (x === 44) {
    res = "Giant slayer";
  } else if (x === 43) {
    res = "Gem of seeing";
  } else if (x === 42) {
    res = "Flame tongue";
  } else if (x === 41) {
    res = "Elven chain";
  } else if (x === 40) {
    res = "Dragon slayer";
  } else if (x === 39) {
    res = "Dimensional shackles";
  } else if (x === 38) {
    res = "Dagger of venom";
  } else if (x === 37) {
    res = "Daern's instant fortress";
  } else if (x === 36) {
    res = "Cube afforce";
  } else if (x === 35) {
    res = "Cloak of the bat";
  } else if (x === 34) {
    res = "Cloak of displacement";
  } else if (x === 33) {
    res = "Armor of resistance (chain shirt)";
  } else if (x === 32) {
    res = "Armor,+1 chain shirt";
  } else if (x === 31) {
    res = "Armor of resistance (chain mail)";
  } else if (x === 30) {
    res = "Armor, +1 chain mail";
  } else if (x === 29) {
    res = "Censer of controlling air elementals";
  } else if (x === 28) {
    res = "Cape of the mountebank";
  } else if (x === 27) {
    res = "Brazier of commanding fire elementals";
  } else if (x === 26) {
    res = "Bracers of defense";
  } else if (x === 25) {
    res = "Bowl of commanding water elementals";
  } else if (x === 24) {
    res = "Boots of speed";
  } else if (x === 23) {
    res = "Boots of levitation";
  } else if (x === 22) {
    res = "Berserker axe";
  } else if (x === 21) {
    res = "Belt of hill giant strength";
  } else if (x === 20) {
    res = "Belt of dwarvenkind";
  } else if (x === 19) {
    res = "Arrow-catching shield";
  } else if (x === 18) {
    res = "Armor of vulnerability";
  } else if (x === 17) {
    res = "Amulet of health";
  } else if (x === 16) {
    res = "Adamantine armor (splint)";
  } else if (x === 15) {
    res = "Adamantine armor (breastplate)";
  } else if (x >= 12) {
    const y = roll8();
    if (y === 8) {
      res = "Serpentine owl";
    } else if (y >= 6) {
      res = "Onyx dog";
    } else if (y === 5) {
      res = "Marble elephant ";
    } else if (y === 4) {
      res = "Ivory goats ";
    } else if (y === 3) {
      res = "Golden lions ";
    } else if (y === 2) {
      res = "Ebony fly ";
    } else {
      res = "Bronze griffon";
    }
  } else {
    res = "Weapon, +2";
  }
  return res;
};
