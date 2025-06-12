import React from "react";
import User from "./User";
import UserClass from "./UserClass"

class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent component did mount");
    }

    render () {
        console.log("Parent render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is about section : </h2>
                <UserClass name = {"first child"}/>
            </div>
        )
    }
}


export default About;