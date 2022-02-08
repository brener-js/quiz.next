import { shuffle } from "../functions/arrays";
import ResponseModel from "./response";

export default class QuestionModel {
  #id: number;
  #questionText: string;
  #responses: ResponseModel[];
  #correctResponse: boolean;
  // #responsed: boolean

  constructor(
    id: number,
    questionText: string,
    responses: ResponseModel[],
    correctResponse = false
  ) {
    this.#id = id;
    this.#questionText = questionText;
    this.#responses = responses;
    this.#correctResponse = correctResponse;
  }

  get id() {
    return this.#id;
  }

  get questionText() {
    return this.#questionText;
  }

  get responses() {
    return this.#responses;
  }

  get correctResponse() {
    return this.#correctResponse;
  }

  get notResponsed() {
    return !this.responsed;
  }

  get responsed() {
    for (let response of this.#responses) {
      if (response.reveled) return true;
    }

    return false;
  }

  answerWith(index: number): QuestionModel {
    const correctResponsed = this.#responses[index]?.correct;
    const responses = this.#responses.map((response, i) => {
      const responseSelected = index === i;
      const canReveal = responseSelected || response.correct;
      return canReveal ? response.reveal() : response;
    });
    return new QuestionModel(
      this.id,
      this.questionText,
      responses,
      correctResponsed
    );
  }

  shuffleResponses(): QuestionModel {
    let responsesShuffled = shuffle(this.#responses);
    return new QuestionModel(
      this.#id,
      this.#questionText,
      responsesShuffled,
      this.#correctResponse
    );
  }

  static createWithObject(obj: QuestionModel): QuestionModel {
    const responses = obj.responses.map((resp) =>
      ResponseModel.createWithObject(resp)
    );
    return new QuestionModel(
      obj.id,
      obj.questionText,
      responses,
      obj.correctResponse
    );
  }

  convertToObject() {
    return {
      id: this.#id,
      questionText: this.#questionText,
      responsed: this.responsed,
      correctResponse: this.#correctResponse,
      responses: this.#responses.map((resp) => resp.convertToObject()),
    };
  }
}
