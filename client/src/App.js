import React from "react";
import { SignalContextProvider } from "./context/SignalContext";
import { UserContextProvider } from "./context/UserContext";
import "./App.css"
import AllRoutes from "./AllRoutes"
const App = () => {
  return (
    <>
      <UserContextProvider>
        <SignalContextProvider>
          <AllRoutes />
        </SignalContextProvider>
      </UserContextProvider>
    </>
  );
};
export default App;
