class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  pop() {
    if (!this.top) return undefined;
    const removedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return removedNode.val;
  }

  push(val) {
    const newNode = new StackNode(val);
    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
    return this;
  }
}
