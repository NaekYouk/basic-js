const chainMaker = {
  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },

  addLink(value = ' ') {
    this.chainArray.push(value);
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position) &&  (position > 0) && (position < this.getLength())) {
      this.chainArray.splice(position - 1, 1);

    }else{
      this.chainArray = [];
      throw new Error();
    }
    return this;
  },

  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  
  finishChain() {
    const result = this.chainArray.slice();
    this.chainArray = [];
    return result.map((item, index) => {
      return `${index ? '~~' : ''}( ${item} )`;
    }).join('');
  }
};

module.exports = chainMaker;

// console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain())