import classes from "../styles/Illustration.module.css";
import signupImage from "../assests/images/signup.jpg";
export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
}
