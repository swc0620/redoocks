import React, { useContext } from "react";
import Header from "./loginHeader";
import { useFns } from "./loginContext";

const Screen = () => {
  const { logUserIn } = useFns()
  return (
    <div>
      <Header />
      <h1>First screen</h1>
      <button onClick={logUserIn}>Log user in</button>
    </div>
  );
};
export default Screen;