class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  };

  get(index) {
    return this.data[index];
  };

  push(item) {
    // incrementando el valor con ++ luego del uso de this.length. 
    // 1ero: asignará el valor actual , seguido de 2do se incrementará en 1.
    this.data[this.length++] = item; 
    return this.data;
  };

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  };

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  };

  shiftIndex(index) {
    debugger;
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  };

  shift() {
    return this.delete(0);
  }

  unshift(item) {
    for (let i = this.length; i >= 1; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.data;
  }
  
}

const myArray = new MyArray();
