// // //// Inheritance
// // // extends

// // class SH {
// //   public static M1() {
// //     console.log("Public");
// //   }

// //   private static M2() {
// //     console.log("Private");
// //   }

// //   protected static M3() {
// //     console.log("Protected");
// //   }
// // }

// // // calling methods
// // //SH.M1(); // public

// // // Public
// // class SS {
// //   M4() {
// //     SH.M1();
// //   }
// // }

// // const ab = new SS();
// // ab.M4();

// // // Protected ----- extends
// // // jahan protected ko call karna hai wahan inheritance concept use hoga

// // class SS1 extends SH {
// //   M5() {
// //     SH.M1();
// //     SH.M3();
// //   }
// // }

// // const ac = new SS1();
// // ac.M5();

// ///////////////////////////////////////////////////////////////

// // 12 Oct

// class className {
//   public Method1() {
//     console.log("Public Non Static");
//   }
//   public static Method2() {
//     console.log("Public Static");
//   }
//   protected Method3() {
//     console.log("Protected Non Static");
//   }
//   protected static Method4() {
//     console.log("Protected Static");
//   }
// }

// className.Method2(); //static

// const abc = new className();
// abc.Method1(); // Non static

// // Protected

// class className1 extends className {
//   methodNew() {
//     className.Method4(); // static
//   }
// }

// const abcd = new className1();
// abcd.methodNew();

///////////////////////

class first {
  protected methodnew() {
    console.log("Protected");
  }
}

class Second extends first {
  methodnew1() {
    this.methodnew();
  }
}

const uu = new Second();
uu.methodnew1();

class Third extends Second {
  methodnew2() {
    const oo = new Third();
    oo.methodnew1();
  }
}
const ff = new Third();
ff.methodnew2();
