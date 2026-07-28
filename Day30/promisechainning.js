// Login API
function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. User logged in");
      resolve({ userId: 101 });
    }, 1000);
  });
}

// Get Profile API
function getProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2. Profile fetched");
      resolve({
        userId: userId,
        username: "prathibha_reddy",
      });
    }, 1000);
  });
}

// Get Posts API
function getPosts(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3. Posts fetched");
      resolve([
        { postId: 1, title: "Nature Photo" },
        { postId: 2, title: "Sunset View" },
      ]);
    }, 1000);
  });
}

// Get Comments API
function getComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("4. Comments fetched");
      resolve(["Awesome!", "Beautiful Picture!", "Nice Click!"]);
    }, 1000);
  });
}

// Promise Chaining implementation
login()
  .then((user) => {
    return getProfile(user.userId);
  })
  .then((profile) => {
    console.log("Username:", profile.username);
    return getPosts(profile.username);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return getComments(posts[0].postId);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
