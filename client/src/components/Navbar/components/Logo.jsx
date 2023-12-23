import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";


const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="w-36"/>
    </Link>
  );
};

export default Logo;
