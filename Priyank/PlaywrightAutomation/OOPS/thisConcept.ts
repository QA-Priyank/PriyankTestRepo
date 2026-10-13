// this concept
// this.
//  use for calling a globally variable into the classes/methods
// this() --- js/ts no

class classage {
  name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  method1() {
    console.log(this.name);
  }
}

const ccc = new classage("Swati", 100);
ccc.method1();
