// src/App.js
import React from "react";
import "./App.css"; // Global styles (optional)
import "./styles/style.css"; // CSS with :root variables
import HomeScreen from "./components/HomeScreen/HomeScreen"; // Adjust path as needed

function App() {
  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
