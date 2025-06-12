import React from "react";

class UserClass extends React.Component {

    constructor(props){
    super(props);
    console.log(this.props.name + " constructor");

        this.state={
            userInfo: {
              name: "dummy",
        
            },
        };
    }

    async componentDidMount(){
       // console.log(this.props.name + " componenent did mount");
       // api call
       const data = await fetch("https://api.github.com/users/akshaymarch7");
       const json = await data.json();

       this.setState({
        userInfo: json,
       })

       console.log(json);
    }

  render() {
    const {name,location, avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
