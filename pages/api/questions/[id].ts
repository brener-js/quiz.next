import questions from "../bankQuestions";

export default function questionsId(req, res) {
  const selectedId = Number(req.query.id);

  const selectedQuestionArr = questions.filter(
    (question) => question.id === selectedId
  );

  if (selectedQuestionArr.length === 1) {
    const selectedQuestion = selectedQuestionArr[0].shuffleResponses();
    res.status(200).json(selectedQuestion.convertToObject());
  } else {
    res.status(204).send();
  }
}
