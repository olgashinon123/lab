class LogicGame {
  constructor() {}
  setNext(next) {
    this.next = next;
  }
  getNext() {
    return this.next;
  }
  process() {
    throw new Error("this is a abstract function can't be called");
  }
}
export default LogicGame;
