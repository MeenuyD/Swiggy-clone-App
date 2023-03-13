import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h5>
        This site is developed by{user.name}-{user.email}
      </h5>

      <h4>Footer</h4>
    </div>
  );
};
export default Footer;
