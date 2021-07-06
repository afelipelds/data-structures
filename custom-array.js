class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    // incrementando el valor con ++ luego del uso de this.length. 
    // 1ero: asignará el valor actual , seguido de 2do se incrementará en 1.
    this.data[this.length++] = item; 
    return this.data;
  }
}

const myArray = new MyArray();
