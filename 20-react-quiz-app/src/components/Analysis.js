import Question from "./Question";
import classes from "../styles/Analysis.module.css";
export default function Analysis() {
  return (
    <div className={classes.analysis}>
      <h1>Result</h1>
      <h4>Correct Answer: 5, Wrong Answer: 5</h4>
      <Question />
    </div>
  );
}
