import React, { useState } from "react";  
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Initialize state at the component level, not inside the handler
  const [isDark, setIsDark] = useState(false);
  
  // Calculate appClass based on the state
  const appClass = isDark ? "App dark" : "App light";

  function handleDarkMode() {
    
    setIsDark(isDark => !isDark);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>
          {isDark ? "Light" : "Dark"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;