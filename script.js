let currentService = "service1";

const maleCount = document.getElementById("maleCount");
const femaleCount = document.getElementById("femaleCount");
const childrenCount = document.getElementById("childrenCount");
const totalCount = document.getElementById("totalCount");
const resetBtn = document.getElementById("resetBtn");
const serviceSelect = document.getElementById("service");
const saveDayBtn = document.getElementById("saveDayBtn");

let male = 0;
let female = 0;
let children = 0;

// Load data when page starts
loadServiceData();
updateDisplay();

// Change service
serviceSelect.addEventListener("change", function () {
  currentService = this.value;
  loadServiceData();
  updateDisplay();
});

// Handle + and -
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

// Reset current service only
resetBtn.addEventListener("click", function () {
  male = 0;
  female = 0;
  children = 0;
  saveData();
  updateDisplay();
});

function saveData() {
  localStorage.setItem(`${currentService}-male`, male);
  localStorage.setItem(`${currentService}-female`, female);
  localStorage.setItem(`${currentService}-children`, children);
}

function loadServiceData() {
  male = Number(localStorage.getItem(`${currentService}-male`)) || 0;
  female = Number(localStorage.getItem(`${currentService}-female`)) || 0;
  children = Number(localStorage.getItem(`${currentService}-children`)) || 0;
}

function updateDisplay() {
  maleCount.textContent = male;
  femaleCount.textContent = female;
  childrenCount.textContent = children;
  totalCount.textContent = male + female + children;
}


saveDayBtn.addEventListener("click", function () {
  const today = new Date().toISOString().split("T")[0];

  const attendanceData = JSON.parse(localStorage.getItem("attendanceHistory")) || {};

  attendanceData[today] = {
    service1: getServiceData("service1"),
    service2: getServiceData("service2"),
    service3: getServiceData("service3"),
    service4: getServiceData("service4"),
  };

  localStorage.setItem("attendanceHistory", JSON.stringify(attendanceData));

  alert("Attendance saved for " + today);
});

function getServiceData(service) {
  return {
    male: Number(localStorage.getItem(`${service}-male`)) || 0,
    female: Number(localStorage.getItem(`${service}-female`)) || 0,
    children: Number(localStorage.getItem(`${service}-children`)) || 0,
  };
}
