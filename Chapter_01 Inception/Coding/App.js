// const h2 = React.createElement("h2", { className: 'heading' }, "h2 heading");
// const p = React.createElement("p", { className: 'para' }, "Welcome to react learning");

// const container = React.createElement("div", { id: 'container' }, [h2, p]);

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1> i am h1 tag </h1>
 *          <h1> i am h1 tag </h1>
 *      </div>
 * </div>
 */

const heading = React.createElement("div",
  { id: 'parent' },
  React.createElement("div", { id: 'child' }, [
    React.createElement("h1", {}, "i'm an h1 tag"),
    React.createElement("h1", {}, "i'm an h1 tag"),
  ])
);


root.render(heading);