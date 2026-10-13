// // class school {
// //   public UNAME: string;
// //   constructor(uName: string, Password: any) {
// //     // console.log(uName + " " + Password);
// //   }

// //   teacher() {
// //     console.log("Teacher");
// //   }

// //   student() {
// //     console.log("Student");
// //   }
// // }

// // const new1 = new school("SS", 123456);
// // // new1.teacher();
// // // new1.student();

// // ////////////////////////////////

// // // 12 Oct

// class newclass1 {
//   constructor() {
//     console.log("This is a Constructor");
//   }
// }

// const abb = new newclass1();

// // Signatures
// // parameter

// // mandatory parameter

// class newclass2 {
//   constructor(name: string) {
//     console.log(name);
//   }
// }

// const acc = new newclass2("Swati");

// // optional parameter

// class newclass3 {
//   constructor(age?: number) {
//     // ? -- Optional
//     console.log(age);
//   }
// }

// const acc1 = new newclass3();

////
// Signature overloading

class newABCD {
  //constructor(name: string);

  constructor(name: string);
  constructor(name: string, age: number, addr: string);

  constructor(name: number, age: number);

  constructor(name: any, age?: any) {
    console.log(name + age);
  }
}

const hh = new newABCD(2026, 87);
