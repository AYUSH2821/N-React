import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child" }, "H1 Tag😍😍"),
  React.createElement("h2", { id: "child" }, "H2 Tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
