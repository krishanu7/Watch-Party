import React from "react";
import { SignalContextProvider } from "./context/SignalContext";
import Welcome from "./components/Welcome/Welcome";
import { UserContextProvider } from "./context/UserContext";
import Options from "./components/Room/Options"
import "./App.css"
const App = () => {
  return (
    <>
      <UserContextProvider>
        <SignalContextProvider>
          <Welcome />
          <Options/>
        </SignalContextProvider>
      </UserContextProvider>
    </>
  );
};
export default App;
