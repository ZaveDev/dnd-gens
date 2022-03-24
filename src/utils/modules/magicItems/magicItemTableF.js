import { roll100 } from "../../roll";
export const magicItemTableF = () => {
  const x = roll100();
  let res;

  if (x === 100) {
    res = "Winged boots";
  } else if (x === 99) {
    res = "Wind fan";
  } else if (x === 98) {
    res = "Stone of good luck";
  } else if (x === 97) {
    res = "Quiver of Ehlonna";
  } else if (x === 96) {
    res = "Ring of water walking ";
  } else if (x === 95) {
    res = "Ring of warmth";
  } else if (x === 94) {
    res = "Ring of mind shielding ";
  } else if (x === 93) {
    res = "Ring of jumping";
  } else if (x === 92) {
    res = "Pipes of the sewers";
  } else if (x === 91) {
    res = "Pipes of haunting";
  } else if (x === 90) {
    res = "Periapt of wound closure";
  } else if (x === 89) {
    res = "Necklace of adaptation";
  } else if (x === 88) {
    res = "Medallion of thoughts";
  } else if (x === 87) {
    res = "Instrument of the bards (Mac-Fuimidh cittern) ";
  } else if (x === 86) {
    res = "Instrument of the bards (Fochlucan bandore) ";
  } else if (x === 85) {
    res = "Instrument of the bards (Doss lute)";
  } else if (x === 84) {
    res = "Helm of telepathy";
  } else if (x === 83) {
    res = "Headband of intellect";
  } else if (x === 82) {
    res = "Gloves of thievery";
  } else if (x === 81) {
    res = "Gloves of swimming and climbing";
  } else if (x === 80) {
    res = "Gloves of missile snaring";
  } else if (x === 79) {
    res = "Gem of brightness";
  } else if (x === 78) {
    res = "Figurine of wondrous power (silver raven)";
  } else if (x === 77) {
    res = "Eyes of the eagle";
  } else if (x === 76) {
    res = "Eyes of charming";
  } else if (x === 75) {
    res = "Eversmoking bottle";
  } else if (x === 74) {
    res = "Deck of illusions";
  } else if (x === 73) {
    res = "Circlet of blasting";
  } else if (x === 72) {
    res = "Boots of the winterlands";
  } else if (x === 71) {
    res = "Bag of tricks (tan)";
  } else if (x === 70) {
    res = "Bag of tricks (rust)";
  } else if (x === 69) {
    res = "Bag of tricks (gray)";
  } else if (x === 68) {
    res = "Adamantine armor (scale mail) ";
  } else if (x === 67) {
    res = "Adamantine armor (chain shirt)";
  } else if (x === 66) {
    res = "Adamantine armor (chain mail) ";
  } else if (x >= 64) {
    res = "Weapon of warning ";
  } else if (x >= 62) {
    res = "Wand of web";
  } else if (x >= 60) {
    res = "Wand of the war mage, +1 ";
  } else if (x >= 58) {
    res = "Wand of magic missiles";
  } else if (x >= 56) {
    res = "Trident of fish command";
  } else if (x >= 54) {
    res = "Sword of vengeance";
  } else if (x >= 52) {
    res = "Staff of the python";
  } else if (x >= 50) {
    res = "Staff of the adder";
  } else if (x >= 48) {
    res = "Slippers of spider climbing ";
  } else if (x >= 46) {
    res = "Rod of the pact keeper, +1 ";
  } else if (x >= 44) {
    res = "Pearl of power";
  } else if (x >= 42) {
    res = "Javelin of lightning";
  } else if (x >= 40) {
    res = "Hat of disguise";
  } else if (x >= 38) {
    res = "Gauntlets of ogre power";
  } else if (x >= 36) {
    res = "Cloak of protection";
  } else if (x >= 34) {
    res = "Cloak of elvenkind";
  } else if (x >= 32) {
    res = "Broom of flying";
  } else if (x >= 30) {
    res = "Brooch of shielding";
  } else if (x >= 28) {
    res = "Bracers of archery";
  } else if (x >= 26) {
    res = "Boots of striding and springing ";
  } else if (x >= 24) {
    res = "Boots of elvenkind";
  } else if (x >= 22) {
    res = "Amulet of proof against detection and location ";
  } else if (x >= 19) {
    res = "Sentinel shield";
  } else if (x >= 16) {
    res = "Shield,+1";
  } else {
    res = "Weapon, +1";
  }

  return res;
};
