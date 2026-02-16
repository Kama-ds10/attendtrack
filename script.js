let male = 0;
let female = 0;
let children = 0;

// Select elements
const maleCount = document.getElementById("maleCount");
const femaleCount = document.getElementById("femaleCount");
const childrenCount = document.getElementById("childrenCount");
const totalCount = document.getElementById("totalCount");
const resetBtn = document.getElementById("resetBtn");

// Handle + and - button clicks using event delegation
document.addEventListener("click", function (e) {
  const type = e.target.dataset.type;

  if (e.target.classList.contains("increase")) {
    if (type === "male") male++;
    if (type === "female") female++;
    if (type === "children") children++;
    updateDisplay();
  }

  if (e.target.classList.contains("decrease")) {
    if (type === "male" && male > 0) male--;
    if (type === "female" && female > 0) female--;
    if (type === "children" && children > 0) children--;
    updateDisplay();
  }
});

// Reset button
resetBtn.addEventListener("click", function () {
  male = 0;
  female = 0;
  children = 0;
  updateDisplay();
});

// Update UI
function updateDisplay() {
  maleCount.textContent = male;
  femaleCount.textContent = female;
  childrenCount.textContent = children;

  const total = male + female + children;
  totalCount.textContent = total;
}
