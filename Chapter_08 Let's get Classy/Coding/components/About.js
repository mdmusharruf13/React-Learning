import React from "react";

class About extends React.Component {

    constructor(props) {
        super(props);
        console.log("Parent constructor")
    }

    componentDidMount() {
        console.log("Parent component did mount")
    }

    render() {
        console.log("Parent render")
        return (
            <div>
                <h2>About</h2>
                <p>this is paragraph</p>
                
            </div>
        )
    }
}

export default About;