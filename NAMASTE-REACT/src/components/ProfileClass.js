import React from "react";
import UserContext from "../utils/UserContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State variable
    this.state = {
      userInfo:{
        name:"Dummy Name",
        location:"Dummy Location"
      }
    };
    console.log("Counstructor ")

  }
   componentDidMount(){
    // const data= await fetch("https://api.github.com/users/MeenuyD");
    // const json=await data.json();
    // this.setState({
    //   userInfo:json,
    // });
    this.timer=setInterval(()=>{
      console.log("Namaste React OP")
    },1000);
    console.log("componenetDidMount");


  }
  componenetDidUpdate(prevProps,prevState){
    // if(this.state.count!===prevState.count){

    // };
    // if(this.state.count2!===prevState.count2){
      
    // };
    console.log("componenetDidUpdate")
  };
  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("componentWillUnmount")
  }

  render() {
    console.log("render")
    return (
      <div>
        <h1>Profile class based component</h1>
        <UserContext.Consumer>
          {({user})=><h4>{user.name}={user.email}</h4>};
        </UserContext.Consumer>
        <h3>Name:{this.state.userInfo.name}</h3>
        <img src={this.state.userInfo.avatar}/>
        <h3>Count:{this.state.userInfo.location}</h3>
        <button
          onClick={() =>
            this.setState({
              count: 1,
              count2: 2,
            })
          }
        >
          Count
        </button>
      </div>
    );
  }
}
export default Profile;
