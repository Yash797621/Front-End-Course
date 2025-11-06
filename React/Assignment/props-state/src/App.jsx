import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCard from "./UserCard";
import Counter from "./Counter";

function App() {
  return (
    <>
      <UserCard name="Yash" age={22} location="Ahmedabad" />
      <Counter />
    </>
  );
}

export default App;
