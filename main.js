let box = document.querySelector(".box");

box.style.backgroundColor = ranColor();

function ranColor() {
  setInterval(color, 10);
}

function color() {
  let ran;
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  box.style.backgroundColor = `rgb(${r},${g},${b})`;
}

ranColor();  // Call ranColor() to start changing the background color
