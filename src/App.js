import { useState } from "react";
import "./App.css";
import { Settlements, Nav, MagicItems, Parcel } from "./components";

function App() {
  const [component, setComponent] = useState("settlements");

  return (
    <div className="App">
      <Nav setComponent={setComponent} />
      {(() => {
        switch (component) {
          case "settlements":
            return <Settlements />;
          case "magic_items":
            return <MagicItems />;
          case "parcel":
            return <Parcel />;
          default:
            break;
        }
      })()}
    </div>
  );
}

export default App;
