const container = document.getElementById("append-container");
const colorBtn = document.querySelector(".color");
const rainBowBtn = document.querySelector(".rainbow");
const clearBtn = document.querySelector(".clear");
const rangeInput = document.getElementById("range");
const sizeLabel = document.querySelector(".size-value");
let isRainbowMode = false;

const colorBlack = (e) => {
  if (!isRainbowMode) {
    e.target.classList.add("black");
  } else if (isRainbowMode) {
    e.target.style.backgroundColor = makeRandomColor();
  }
};

function createGrid(n) {
  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n},1fr)`;
  for (let i = 0; i < n * n; i++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("square");
    container.appendChild(createDiv);
  }
}

createGrid(16);

function getRundomNumber() {
  return Math.ceil(Math.random() * 256);
}

function makeRandomColor() {
  return `rgb(${getRundomNumber()}, ${getRundomNumber()}, ${getRundomNumber()})`;
}

function makeRainbow(e) {
  if (isRainbowMode) {
    e.target.style.backgroundColor = makeRandomColor();
  } else if (!isRainbowMode) {
    e.target.classList.add("black");
  }
}

function toggleRainbowMode() {
  isRainbowMode = !isRainbowMode;
}

function clasColorAdd(e) {
  isRainbowMode = false;
}

function clearAllPanel(e) {
  container.innerHTML = "";
  isRainbowMode = false;
  const n = parseInt(rangeInput.value) || 16;
  createGrid(n);
}

rangeInput.addEventListener("input", function () {
  const value = rangeInput.value;
  sizeLabel.textContent = `${value} x ${value}`;
  container.innerHTML = "";

  createGrid(value);
});

rainBowBtn.addEventListener("click", toggleRainbowMode);
colorBtn.addEventListener("click", clasColorAdd);
clearBtn.addEventListener("click", clearAllPanel);

container.addEventListener("mouseover", colorBlack);
