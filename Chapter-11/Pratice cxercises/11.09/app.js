const drag = document.querySelector("#dragme");
const boxes = document.querySelectorAll(".box");
drag.addEventListener("dragstart", (e) => {
	drag.style.opacity = .5;
})
drag.addEventListener("dragend", (e) => {
	drag.style.opacity = "";
})

boxes.forEach(bxs => {
	bxs.addEventListener("dragenter", (enter) => {
		e.target.classList.add("red")
	});

	bxs.addEventListener("dragover", (e) => {
		e.preventDefault();
	});

	bxs.addEventListener("dragleave", (e) => {
		e.target.classList.remove("red")
	});
	bxs.addEventListener("drop", (e) => {
		e.preventDefault();
		e.target.appendChild(drag)
	});
});

function dragStart(e) {
	console.log("Started")
}