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

// Only this function is async
async function instagramScroll() {
  try {
    const user = await login();

    const profile = await getProfile(user.userId);
    console.log("Username:", profile.username);

    const posts = await getPosts(profile.username);
    console.log("Posts:", posts);

    const comments = await getComments(posts[0].postId);
    console.log("Comments:", comments);
  } catch (error) {
    console.log(error);
  }
}

// Call the async function
instagramScroll();
