import styles from "../styles/Quiz.module.css";
import QuestionModel from "../model/question";
import Question from "./Question";
import Button from "./Button";

interface QuizProps {
  question: QuestionModel;
  last: boolean;
  questionResponded: (question: QuestionModel) => void;
  nextStep: () => void;
}

export default function Quiz(props: QuizProps) {
  function responseReceived(index: number) {
    if (props.question.notResponsed) {
      props.questionResponded(props.question.answerWith(index));
    }
  }

  return (
    <div className={styles.quiz}>
      {props.question ? (
        <Question
          value={props.question}
          onResponse={responseReceived}
          timeOut={props.nextStep}
        />
      ) : (
        false
      )}
      <Button
        onClick={props.nextStep}
        text={props.last ? "Finalizar" : "Próximo"}
      />
    </div>
  );
}
