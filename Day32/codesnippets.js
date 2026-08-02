setTimeout(function () {
  console.log("Hello");
}, 2000);
const promise = new Promise(function (resolve, reject) {
  resolve("Success");
});

promise.then(function (result) {
  console.log(result);
});
new Promise(function (resolve) {
  resolve(10);
})
  .then(function (value) {
    return value * 2;
  })
  .then(function (value) {
    return value + 5;
  })
  .then(function (value) {
    console.log(value);
  });
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
}

fetchUsers();
