// IN --- object {}

let obj = {
  name1: "QA 1",
  name2: "QA 2",
  name3: "QA 3",
  name4: "QA 4",
};

for (let abcd in obj) {
  console.log(abcd, obj[abcd]);
}

/*
for...of

for (const value of iterable) {
  // use value
}

for...in

for (const key in object) {
  // use key, object[key]
}
*/
