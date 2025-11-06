import React from "react";
import { jsx } from "react/jsx-runtime";

function JSX() {
  const jsxDefination =
    "JSX is a JavaScript syntax extension that allows you to write HTML-like code directly within JavaScript files. It is primarily used with the React framework to describe what the user interface should look like, making it easier to build user interfaces by keeping rendering logic and content in the same place. When processed, this XML-like syntax is converted into regular JavaScript function calls that build user interface elements.";
  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>{jsxDefination}</p>
    </div>
  );
}

export default JSX;
