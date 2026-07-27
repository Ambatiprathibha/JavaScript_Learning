function login(userId, password) {
  console.log("Insta Login attempted");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === "user123" && password === "password123") {
        console.log("1.Login successful : " + userId);
        resolve({
          userId: 100,
          userName: "John Doe",
          token: "insta201",
        });
      } else {
        console.log("1.Login failed : " + userId);
        reject("Invalid Username or Password");
      }
    }, 2000);
  });
}

function profileFetch(userId) {
  console.log("Profile Fetch attempted");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        console.log("2.Profile fetch successful : " + userId);
        resolve({
          Bio: "Hello, I am John Doe. Welcome to my profile!",
          userName: "John Doe",
          profilePic: "profile.jpg",
          FOLLOWERS: 1000,
          FOLLOWING: 500,
        });
      } else {
        console.log("2.Profile fetch failed : " + userId);
        reject("Invalid User ID");
      }
    }, 2000);
  });
}
console.log("Insta App Started");
const reslogin = login("user1234", "password123")
  .then(profileFetch)
  .then((profile) => {
    console.log("3.Profile Data : " + JSON.stringify(profile));
  })
  .catch((err) => {
    console.log("Error : " + err);
  });

//const reslogin2 = login("user13", "password13");
