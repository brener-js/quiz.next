import QuestionModel from "../model/question";
import styles from "../styles/Question.module.css";
import Counter from "./Counter";
import QuestionTitle from "./QuestionTitle";
import Response from "./Response";

const letters = [
  { value: "A", color: "#f2c866" },
  { value: "B", color: "#f266BA" },
  { value: "C", color: "#85D4F2" },
  { value: "D", color: "#BCE596" },
];

interface QuestionProps {
  value: QuestionModel;
  timeToResponse?: number;
  onResponse: (index: number) => void;
  timeOut: () => void;
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  function renderResponses() {
    return question.responses.map((response, i) => {
      return (
        <Response
          key={`${question.id}-${i}`}
          value={response}
          index={i}
          letter={letters[i].value}
          colorBackgroundLetter={letters[i].color}
          onResponse={props.onResponse}
        />
      );
    });
  }

  return (
    <div className={styles.question}>
      <QuestionTitle text={question.questionText} />
      <Counter
        key={question.id}
        duration={props.timeToResponse ?? 10}
        timeOut={props.timeOut}
      />
      {renderResponses()}
    </div>
  );
}
