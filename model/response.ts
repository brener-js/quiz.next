export default class ResponseModel {
  #value: string;
  #correct: boolean;
  #reveled: boolean;

  constructor(value: string, correct: boolean, reveled = false) {
    this.#value = value;
    this.#correct = correct;
    this.#reveled = reveled;
  }

  static correct(value: string) {
    return new ResponseModel(value, true);
  }

  static wrong(value: string) {
    return new ResponseModel(value, false);
  }

  get value() {
    return this.#value;
  }

  get correct() {
    return this.#correct;
  }

  get reveled() {
    return this.#reveled;
  }

  reveal() {
    return new ResponseModel(this.#value, this.#correct, true);
  }

  static createWithObject(obj: ResponseModel): ResponseModel {
    return new ResponseModel(obj.value, obj.correct, obj.reveled);
  }

  convertToObject() {
    return {
      value: this.#value,
      correct: this.#correct,
      reveled: this.#reveled,
    };
  }
}
