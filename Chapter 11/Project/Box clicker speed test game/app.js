const output = document.querySelector(".output");
const message = document.querySelector(".message");

const box = document.createElement("div");
box.classList.add("box");
output.append(box);
box.style.backgroundColor = randomColor();
message.textContent = "Press to start"


let game = {
	timer: 0,
	start: null
}

let duration;
let current;

//Random number function;
function ranNum(max) {
	return Math.floor(Math.random() * max)
}


box.addEventListener("click", () => {
	box.style.display = "none"
	setTimeout(addBox, ranNum(2000));

	if (!game.start) {
		message.textContent = "Loading plesae wait..."
	} else {
		current = new Date().getTime();
		duration = (current - game.start) / 1000;
		message.textContent = `Its look ${duration} seconds to click it.`;

	}
});

function addBox() {
	message.textContent = `Its look ${duration} seconds to click it.`;;
	game.start = new Date().getTime();
	box.style.display = "block";
	box.style.left = ranNum(450) + "px";
	box.style.top = ranNum(450) + "px";
}

function randomColor() {
	setInterval(color, 100)
}

function color() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	box.style.backgroundColor = `rgb(${r},${g},${b})`
};

randomColor();