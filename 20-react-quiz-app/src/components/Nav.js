import logo from "../assests/images/abdul-alim.jpg";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Abdul Alim" />
            <h3>Play Quiz & Sharp Your Skills</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
