import { Outlet } from "react-router-dom";
import ProfilefunctionalComponenet from "./Profile";
import Profile from "./ProfileClass";

const About=()=>{
    return(
        <div>
            <h1>It is about us page</h1>
            <ProfilefunctionalComponenet name={"Meenu"}/>
            <Profile name={"MeenuClass"}/>

        </div>
    );
};
export default About;