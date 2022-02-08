import { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import QuestionModel from "../model/question";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const router = useRouter();

  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [correctResponses, setCorrectResponses] = useState<number>(0);

  async function loadQuestionsIds() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const questionsIds = await resp.json();
    setQuestionsIds(questionsIds);
  }

  async function loadQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`);
    const json = await resp.json();
    const newQuestion = QuestionModel.createWithObject(json);
    setQuestion(newQuestion);
  }

  useEffect(() => {
    loadQuestionsIds();
  }, []);

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0]);
  }, [questionsIds]);

  function questionResponded(questionResponsed: QuestionModel) {
    setQuestion(questionResponsed);
    const correct = questionResponsed.correctResponse;
    setCorrectResponses(correctResponses + (correct ? 1 : 0));
  }

  function idNextQuestion() {
    const nextIndex = questionsIds.indexOf(question.id) + 1;
    return questionsIds[nextIndex];
  }

  function nextStep() {
    const nextId = idNextQuestion();
    nextId ? goToNextQuestion(nextId) : finish();
  }

  function goToNextQuestion(nextId: number) {
    loadQuestion(nextId);
  }

  function finish() {
    router.push({
      pathname: "/result",
      query: {
        total: questionsIds.length,
        correctResponses: correctResponses,
      },
    });
  }

  return question ? (
    <Quiz
      question={question}
      last={idNextQuestion() === undefined}
      questionResponded={questionResponded}
      nextStep={nextStep}
    />
  ) : (
    false
  );
}
