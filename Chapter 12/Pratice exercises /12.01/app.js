const output = document.querySelector("#output");
const findValue = document.querySelector("#sText");
const replaceValue = document.querySelector("#rText");
document.querySelector("button").addEventListener("click", lookUp);

function lookUp() {
	const s = output.textContent;
	const rt = replaceValue.value;
	const re = new RegExp(findValue.value, "gi");
	if (s.match(re)) {
		let newValue = s.replace(re, rt);
		output.textContent = newValue;
	}
}