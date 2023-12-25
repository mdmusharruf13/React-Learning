import React from "react"

class Profile extends React.Component {

    constructor(props) {
        super(props);
        // create state
        this.state = {
            userInfo: {
                name: "dummy name",
                location: "dummy location"
            }
        };
        console.log("child constructor" + this.props.name)
    }
    async componentDidMount() {
        // best place to make api calls
        const data = await fetch("https://api.github.com/users/mdmusharruf13");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        }); 
        console.log("child component did mount" + this.props.name)
    }

    componentDidUpdate() {
        console.log("child componentDidUpdate" + this.props.name)
    }
    componentWillUpdate() {
        console.log("child componentWillUpdate" + this.props.name)
    }

    render() {
        console.log("child render" + this.props.name)
        // let { count } = this.state;
        return (
            <div>
                <h1>ProfileClass component</h1>
                <h2>Name : {this.props.name}</h2>
                <h2>Json Data :-</h2>
                <h3>Name: {this.state.userInfo.name}</h3>
                <img src={this.state.userInfo.avatar_url}/>
            </div>
        )
    }
}

export default Profile;