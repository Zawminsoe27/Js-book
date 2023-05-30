let box = document.querySelector("#box");
let mover = { speed: 10, direction: 1, position: 0 }

box.addEventListener("click", moveBlock);

function moveBlock() {
	let x = 30;
	setInterval(() => {
		if (x < 1) {
			clearInterval();
		} else {
			if (mover.position > 400 || mover.position < 0) {
				mover.direction *= -1;
			}
			x--;
			mover.position += x * mover.direction;
			box.style.left = mover.position + "px";
			console.log(mover.position)
		}
	}, 2)
}