const output = document.querySelector(".output");
const email = document.querySelector(".email");
const reqMail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/;

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
	let emailVal = email.value;
	let result = reqMail.test(emailVal);
	let response = "";
	if (!result) {
		output.textContent = `Please enter valid email. You input ${emailVal} is not a valid email`
		output.classList.remove("alert-success")
		output.classList.add("alert-danger")
	}
	if (result) {
		output.textContent = `Success your email ${emailVal} is valid`
		output.classList.remove("alert-danger");
		output.classList.add("alert-success");
	}
	email.value = "";

})