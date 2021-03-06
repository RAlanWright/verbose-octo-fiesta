import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Conan",
      animal: "Cat",
      breed: "Russian Blue",
    }),
    React.createElement(Pet, {
      name: "Alpha",
      animal: "Cat",
      breed: "Maine Coon",
    }),
    React.createElement(Pet, {
      name: "Leo",
      animal: "Cat",
      breed: "Domestic Long Hair",
    }),
    React.createElement(Pet, {
      name: "Spencer",
      animal: "Dog",
      breed: "Deer Chihuahua",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
