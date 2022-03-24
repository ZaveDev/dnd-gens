import React, { useState } from "react";
import {
  title,
  raceRelations,
  rulerStatus,
  notableTraits,
  knownFor,
  currentIssue,
  buildings,
} from "../utils";
export default function Settlements() {
  const [places, setPlaces] = useState(buildings());
  const [settlement, setSettlement] = useState({
    title: title(),
    raceRelations: raceRelations(),
    rulerStatus: rulerStatus(),
    notableTraits: notableTraits(),
    knownFor: knownFor(),
    currentIssue: currentIssue(),
  });
  const reTitle = () => {
    setSettlement({ ...settlement, title: title() });
  };
  const rollSettlement = () => {
    setSettlement({
      title: title(),
      raceRelations: raceRelations(),
      rulerStatus: rulerStatus(),
      notableTraits: notableTraits(),
      knownFor: knownFor(),
      currentIssue: currentIssue(),
    });
  };

  return (
    <div className="container">
      <div className="flex-container space-between">
        <h3 onClick={reTitle}>{settlement.title}</h3>
        <button className="nav-btn" onClick={rollSettlement}>
          ReRoll
        </button>
      </div>
      <div>
        <p>
          <b>Race Relation:</b> {settlement.raceRelations}
        </p>
        <p>
          <b>Ruler Status:</b> {settlement.rulerStatus}
        </p>
        <p>
          <b>Notable Traits:</b> {settlement.notableTraits}
        </p>
        <p>
          <b>Known For:</b> {settlement.knownFor}
        </p>
        <p>
          <b>Current Issue:</b> {settlement.currentIssue}
        </p>
      </div>
      <hr />
      <div className="flex-container space-between">
        <h3>Places</h3>
        <button className="nav-btn" onClick={() => setPlaces(buildings())}>
          ReRoll
        </button>
      </div>
      {places.sort().map((building) => (
        <p key={Math.random()}>
          <b>{building.type}</b>: {building.choice}
        </p>
      ))}
    </div>
  );
}
