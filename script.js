const container = document.getElementById("append-container");
const buton1 = document.querySelector("#buton1");

const cleanGrid = () => {
  container.innerHTML = "";
};

buton1.addEventListener("click", () => {
  const gridSize = prompt("Please enter your value");
  if (gridSize !== null) {
    cleanGrid(gridSize);
    createGrid(gridSize);
  }
});

const print = (event) => {
  event.target.style.backgroundColor = "yellow";
};

const clean = (e) => {
  e.target.style.backgroundColor = "";
};

function createGrid(n) {
  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n},1fr)`;
  for (let i = 0; i < n * n; i++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("square");
    container.appendChild(createDiv);

    createDiv.addEventListener("mouseover", print);
    createDiv.addEventListener("mouseleave", clean);
  }
}

createGrid(16);
