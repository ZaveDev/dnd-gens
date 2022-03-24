import React from "react";

export default function Nav({ setComponent }) {
  return (
    <nav className="nav">
      <button className="nav-btn" onClick={() => setComponent("settlements")}>
        Settlements
      </button>
      <button className="nav-btn" onClick={() => setComponent("parcel")}>
        Parcel
      </button>
      <button className="nav-btn" onClick={() => setComponent("magic_items")}>
        Magic Items
      </button>
    </nav>
  );
}
