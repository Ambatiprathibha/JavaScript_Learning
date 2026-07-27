//socialMedia application
function login(userId, password) {
  setTimeout(() => {
    console.log("Login Successful:" + userId);
  }, 1000);
}
function profileFetch() {
  setTimeout(() => {
    console.log("Profile Fetched");
  }, 2000);
}

function friendList() {
  setTimeout(() => {
    console.log("Friend List Fetched");
  }, 3000);
}
function fetchPosts() {
  setTimeout(() => {
    console.log("Fetching Posts");
  }, 2000);
}
function fetchComments() {
  setTimeout(() => {
    console.log("Fetching Comments");
  }, 1000);
}
console.log("Insta Loaded");
login("user123", "password123");
profileFetch();
friendList();
fetchPosts();
fetchComments();
