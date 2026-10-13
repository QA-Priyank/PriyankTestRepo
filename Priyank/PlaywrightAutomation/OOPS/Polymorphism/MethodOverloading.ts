// method overloading in another class

class methodoverloading {
  method1() {
    console.log("Method 1");
  }
}

class methodoverloading1 extends methodoverloading {
  method1() {
    console.log("Method 1 of 2nd class");
  }
}
const jj = new methodoverloading1();
jj.method1();
