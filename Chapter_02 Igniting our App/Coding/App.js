import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement("div",
    { id: 'parent' },
    React.createElement("div", { id: 'child' }, [
        React.createElement("h1", {}, "i'm an h1 tag"),
        React.createElement("h1", {}, "i'm an h1 tag"),
    ])
);


root.render(heading);