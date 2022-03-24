import React, { useState } from "react";
import {
  magicItemTableA,
  magicItemTableB,
  magicItemTableC,
  magicItemTableD,
  magicItemTableE,
  magicItemTableF,
  magicItemTableG,
  magicItemTableH,
  magicItemTableI,
} from "../utils/modules/magicItems";

export default function MagicItems() {
  const [items, setItems] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
  });
  return (
    <div className="container">
      <div className="flex-container space-evenly">
        <div
          className="magic-item-square"
          onClick={() => setItems({ ...items, A: magicItemTableA() })}
        >
          <h3> Magic Item Table A</h3>
          <p> {items.A} </p>
        </div>

        <div
          className="magic-item-square"
          onClick={() => setItems({ ...items, B: magicItemTableB() })}
        >
          <h3> Magic Item Table B</h3>
          <p> {items.B} </p>
        </div>

        <div
          className="magic-item-square"
          onClick={() => setItems({ ...items, C: magicItemTableC() })}
        >
          <h3> Magic Item Table C</h3>
          <p> {items.C} </p>
        </div>

        <div
          className="magic-item-square"
          onClick={() => setItems({ ...items, D: magicItemTableD() })}
        >
          <h3> Magic Item Table D</h3>
          <p> {items.D} </p>
        </div>

        <div
          className="magic-item-square"
          onClick={() => setItems({ ...items, E: magicItemTableE() })}
        >
          <h3> Magic Item Table E</h3>
          <p> {items.E} </p>
        </div>

        <div
          className="magic-item-square"
          onClick={() => setItems({ ...items, F: magicItemTableF() })}
        >
          <h3> Magic Item Table F</h3>
          <p> {items.F} </p>
        </div>

        <div
          className="magic-item-square"
          onClick={() => setItems({ ...items, G: magicItemTableG() })}
        >
          <h3> Magic Item Table G</h3>
          <p> {items.G} </p>
        </div>

        <div
          className="magic-item-square"
          onClick={() => setItems({ ...items, H: magicItemTableH() })}
        >
          <h3> Magic Item Table H</h3>
          <p> {items.H} </p>
        </div>

        <div
          className="magic-item-square"
          onClick={() => setItems({ ...items, I: magicItemTableI() })}
        >
          <h3> Magic Item Table I</h3>
          <p> {items.I} </p>
        </div>
      </div>
    </div>
  );
}
