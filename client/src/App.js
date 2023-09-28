import React from "react";
import { SignalContextProvider } from "./context/SignalContext";
import Welcome from "./components/Welcome/Welcome";
import { UserContextProvider } from "./context/UserContext";
const App = () => {
  return (
    <div>
      <UserContextProvider>
        <SignalContextProvider>
          <Welcome />
        </SignalContextProvider>
      </UserContextProvider>
    </div>
  );
};
export default App;
