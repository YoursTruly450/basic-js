const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: new Array(),

  getLength() {
    return this.chain.length;
  },
  addLink(value) {

    if (String(value) !== '') {
      this.chain.push('( ' + String(value) + ' )');
    } else {
      this.chain.push('( )');
    }
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && (position >= 1) && (position <= this.chain.length)) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let newStr = '';
    newStr = this.chain.join('~~');
    this.chain = [];
    return newStr;
  }
};

module.exports = chainMaker;
