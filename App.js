/* 

<div id="parent">
    <div id="child1">
        <h1> I'm H1 tag </h1>
        <h2> I'm H1 tag </h2>
    </div>
</div>


*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("h1", { id: "child" }, "I'm H1 tag"),React.createElement("h2", { id: "child" }, "I'm H2 tag")]
);

//console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
