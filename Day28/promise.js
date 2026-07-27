const p = new Promise((resolve, reject) => {
  resolve("Pizza is ready");
  reject("Pizza is not ready");
});
p.then((message) => {
  console.log(message);
}).catch((errormessage) => {
  console.log(errormessage);
});
