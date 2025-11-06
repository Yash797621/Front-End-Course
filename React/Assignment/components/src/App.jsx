import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./Greeting";
import WelcomeMessage from "./WelcomeMessage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting name="Yash" />
      <WelcomeMessage />
    </>
  );
}

export default App;
