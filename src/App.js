import { useState } from "react";
import "./App.css";
import { Settlements, Nav, MagicItems, Parcel } from "./components";

function App() {
  const [component, setComponent] = useState("");

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
            return <Home />
            break;
        }
      })()}
    </div>
  );
}

export default App;
