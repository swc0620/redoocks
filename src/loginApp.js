import React from 'react';
import Screen from "./loginScreen";
import UserContextProvider from './translateContext';

function App() {
  return (
    <UserContextProvider>
      <Screen />
    </UserContextProvider>
  );
}

export default App;
