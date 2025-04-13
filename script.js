let count = 0;
let cryLog = JSON.parse(localStorage.getItem("cryLog")) || [];

function updateDisplay() {
  document.getElementById("count").textContent = `Cries today: ${count}`;
  document.getElementById("daily").textContent = `Today: ${count}`;
  document.getElementById("weekly").textContent = `This Week: ${cryLog.length}`;
  document.getElementById("monthly").textContent = `This Month: ${cryLog.length}`;
  document.getElementById("yearly").textContent = `This Year: ${cryLog.length}`;
}

function increment() {
  count++;
  cryLog.push(new Date().toISOString());
  localStorage.setItem("cryLog", JSON.stringify(cryLog));
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

updateDisplay();
