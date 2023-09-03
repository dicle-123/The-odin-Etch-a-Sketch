const container = document.getElementById("append-container");

const print = (event) => {
  event.target.style.backgroundColor = "yellow";
};

const clean = (e) => {
  e.target.style.backgroundColor = "";
};

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("square");
    container.appendChild(createDiv);
    createDiv.addEventListener("mouseover", print);
    createDiv.addEventListener("mouseleave", clean);
  }
}
