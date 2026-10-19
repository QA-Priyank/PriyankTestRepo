const newPromise = new Promise((resolve, reject) => {
  resolve("ye pass hai");
});

// pass ==then()
// fail == catch()

newPromise
  .then((abcd) => {
    console.log(abcd);
  })
  .catch((error) => {
    console.log(error);
  });
