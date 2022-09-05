import Answers from "../Answers";
import ProgressBar from "../ProgressBar";
import MiniPlayer from "../MiniPlayer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import useQuestions from "../../hooks/useQuestions";
import _ from "lodash";
import { useAuth } from "../../contexts/AuthContext";
import { getDatabase, set, ref } from "firebase/database";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
  }
};
export default function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qn, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  console.log(questions);
  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }
  //Function to display next questions set when user click "Next Question" button.
  function nextQuestion() {
    //console.log("nextQuestion is Called");
    //console.log(questions.length);
    if (currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    }
  }

  //Function to display previous questions set when user click "<-" button.
  function previousQuestion() {
    if (currentQuestion > 0 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion - 1);
    }
  }

  //submit quiz function
  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qn,
    });
    navigate(`/result/${id}`, {
      state: {
        qn,
      },
    });
  }

  //Function to Calculate the percentage of progress.
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There is an error!</div>}
      {!loading && !error && qn && qn.length > 0 && (
        <>
          <h1>{qn[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qn[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={previousQuestion}
            submit={submit}
            progress={percentage}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
}
