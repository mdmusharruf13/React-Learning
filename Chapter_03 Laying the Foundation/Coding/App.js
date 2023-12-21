import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => Object => HTML(DOM)

const heading = React.createElement(
    "h2",
    {
        id: "title",
        key: "h2"
    },
    "Heading with h2"
);

// JSX => React.createElement => Object => HTML(DOM)

const heading3 = <h3 key="h3" id="title">heading with jsx</h3>

const HeaderComponent = function() {
    return (
        <div>
            <h1>Functional component heading</h1>
            <h2>This is h2 tag</h2>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);