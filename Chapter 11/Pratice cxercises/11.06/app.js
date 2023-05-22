let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");

container.addEventListener("click", () => {
    console.log("4");
}, false);

container.addEventListener("click", () => {
    console.log("1");
}, true);

boxes.forEach(elem => {
    elem.addEventListener("click", (e) => {
        console.log("3");
        console.log(e.target.textContent)

    }, false);

    elem.addEventListener("click", (e) => {
        console.log("2");
        console.log(e.target.textContent)
    }, true);
})