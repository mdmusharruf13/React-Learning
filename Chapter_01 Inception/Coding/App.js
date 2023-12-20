const h2 = React.createElement("h2", { className: 'heading' }, "h2 heading");
const p = React.createElement("p", { className: 'para' }, "Welcome to react learning");

const container = React.createElement("div", { id: 'container' }, [h2, p]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);