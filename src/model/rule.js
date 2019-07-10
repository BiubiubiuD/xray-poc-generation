import Header from './header';

let nextRuleIndex = 0;

export default class RuleObject {
  constructor() {
    this.index = ++nextRuleIndex;
    this.method = "GET";
    this.path = "";
    this.headers = [new Header()];
    this.body = "";
    this.followRedirects = true
    this.expression = "";
    this.search = "";
  }

  addHeader() {

  }
}