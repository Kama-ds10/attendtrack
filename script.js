// Load saved values or default to 0
let male = Number(localStorage.getItem("male")) || 0;
let female = Number(localStorage.getItem("female")) || 0;
let children = Number(localStorage.getItem("children")) || 0;

// Select elements
const maleCount = document.getElementById("maleCount");
const femaleCount = document.getElementById("femaleCount");
const childrenCount = document.getElementById("childrenCount");
const totalCount = document.getElementById("totalCount");
const resetBtn = document.getElementById("resetBtn");

// Update UI immediately when page loads
updateDisplay();

// Handle + and - clicks
document.addEventListener("click", function (e) {
  const type = e.target.dataset.type;

  if (e.target.classList.contains("increase")) {
    if (type === "male") male++;
    if (type === "female") female++;
    if (type === "children") children++;
    saveData();
    updateDisplay();
  }

  if (e.target.classList.contains("decrease")) {
    if (type === "male" && male > 0) male--;
    if (type === "female" && female > 0) female--;
    if (type === "children" && children > 0) children--;
    saveData();
    updateDisplay();
  }
});

// Reset
resetBtn.addEventListener("click", function () {
  male = 0;
  female = 0;
  children = 0;
  saveData();
  updateDisplay();
});

// Save to browser
function saveData() {
  localStorage.setItem("male", male);
  localStorage.setItem("female", female);
  localStorage.setItem("children", children);
}

// Update screen
function updateDisplay() {
  maleCount.textContent = male;
  femaleCount.textContent = female;
  childrenCount.textContent = children;
  totalCount.textContent = male + female + children;
}
