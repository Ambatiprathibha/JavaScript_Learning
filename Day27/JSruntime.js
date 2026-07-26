function fetchData() {
  console.log("Fetching The Data");
}

console.log("Dashboard Loaded");

let id = setInterval(fetchData, 3000);

setTimeout(() => {
  clearInterval(id);
  console.log("Stopped...");
}, 20000);
