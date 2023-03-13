import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log("Namaste React OP")
    },1000);
    console.log("useEffect");
    return()=>{
      clearInterval(timer);
      console.log("useEffect Return");

    };
  },[])
  console.log("render");
  return (
    <div>
      <h1>This is profile componenet</h1>
      <h3>Nmae:{props.name}</h3>
      <h3>Count:{count}</h3>
      <button onClick={() => (setCount(1), setCount2(2))}>Count</button>
    </div>
  );
};
export default Profile;
