// super

// constructor --- 1st class constructor ko callkarna hai in another
// class then we use super concept --- super()

// methods --- 1st class constructor ko callkarna hai in another
// class then we use super concept --- super.methodName()

class FirstClass {
  constructor() {
    console.log("1st class constructor");
  }

  method1() {
    console.log("1st class method");
  }
}

class SecondClass extends FirstClass {
  constructor() {
    console.log("2nd class constructor");
    super();
  }

  method1() {
    super.method1();
    console.log("2nd class method");
  }
}

const yy = new SecondClass();
yy.method1();

//////
// parameterized

class FirstClass1 {
  constructor(name?: string) {
    console.log(name);
  }

  method1() {
    console.log("1st class method");
  }
}

class SecondClass1 extends FirstClass1 {
  constructor() {
    console.log("2nd class constructor");
    super();
  }

  method1() {
    super.method1();
    console.log("2nd class method");
  }
}

const yy1 = new SecondClass1();
//yy.method1();
