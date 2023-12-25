import React from "react"

class Profile extends React.Component {

    constructor(props) {
        super(props);
        // create state
        this.state = {
            count : 0,
            count2 : 0,
        };
        console.log("child constructor" + this.props.name)
    }
    componentDidMount() {
        // best place to make api calls
        console.log("child component did mount" + this.props.name)
    }
    
    render() {
        console.log("child render" + this.props.name)
        // let { count } = this.state;
        return (
            <div>
                <h1>ProfileClass component</h1>
                <h2>Name : {this.props.name}</h2>
                <h2>Count : {this.state.count}</h2>
                <button 
                    onClick={() => {
                        // we do not mutate state directly
                        // Never do this.state = something
                        this.setState({
                            count:  1
                        })
                    }}
                >
                    increament
                </button>
            </div>
        )
    }
}

export default Profile;