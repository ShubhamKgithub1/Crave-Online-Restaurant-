// const heading = React.createElement("h1", {id:"heading"}, "Hello World via React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading1" }, "I'm a h1 heading"),React.createElement("h2", {id:"heading2"}, "I'm a h2 heading")]));


const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);