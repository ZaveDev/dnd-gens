import React, { useState } from "react";
import {
  hoardA,
  hoardB,
  individualA,
  individualB,
  individualC,
  individualD,
} from "../utils/modules/loot";

export default function Parcel() {
  const [parcel, setParcel] = useState({
    coins: {
      cp: 0,
      sp: 0,
      gp: 0,
      pp: 0,
    },
    items: [],
  });
  return (
    <div className="container" style={{ padding: "5%" }}>
      <div
        style={{
          background: "rgb(50,50,50)",
          padding: "5%",
          borderRadius: "5px",
        }}
      >
        <div>
          <div className="flex-container space-between">
            <h4> cp: {parcel.coins.cp}</h4>
            <h4> sp: {parcel.coins.sp}</h4>
            <h4> gp: {parcel.coins.gp}</h4>
            <h4> pp: {parcel.coins.pp}</h4>
          </div>
          <h2>Items</h2>
          <div>
            {parcel.items.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex-container space-between" style={{ padding: "2%" }}>
          <button className="nav-btn" onClick={() => setParcel(hoardA)}>
            Hoard A
          </button>
          <button className="nav-btn" onClick={() => setParcel(hoardB)}>
            Hoard B
          </button>
        </div>
        <div className="flex-container space-between" style={{ padding: "2%" }}>
          <button className="nav-btn" onClick={() => setParcel(individualA)}>
            individual A
          </button>
          <button className="nav-btn" onClick={() => setParcel(individualB)}>
            individual B
          </button>
          <button className="nav-btn" onClick={() => setParcel(individualC)}>
            individual C
          </button>
          <button className="nav-btn" onClick={() => setParcel(individualD)}>
            individual D
          </button>
        </div>
      </div>
    </div>
  );
}
