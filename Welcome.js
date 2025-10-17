import React from "react";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      {/* Render the component dynamically with different names */}
      <Welcome name="Deepak" />
      <Welcome name="Datta Sai" />
      <Welcome name="Priya" />
      <Welcome name="Ravi" />
    </div>
  );
}

export default App;