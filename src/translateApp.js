import React from 'react';
import Screen from "./translateScreen";
import Lang from './translateContext';
import translations from "./translations"

function App() {
  return (
    <Lang defaultLang="en" translations={ translations }>
      <Screen />
    </Lang>
  );
}

export default App;
