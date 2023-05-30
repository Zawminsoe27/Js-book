const main = document.querySelector(".main")
		const input = document.querySelector("input");
		const btn = document.querySelector("button")
		const output = document.querySelector(".output")

		const tasks = JSON.parse(localStorage.getItem("taskList")) || [];

		if (tasks.length > 0) {
			tasks.forEach((task) => {
				genItem(task.val, task.checked)
			})
		}

		function genItem(val, complete) {
			let li = document.createElement("li");
			let temp = document.createTextNode(val);
			li.append(temp);
			output.appendChild(li);
			input.value = "";
			if (complete) {
				li.classList.add("ready")
			}

			li.addEventListener("click", () => {
				li.classList.toggle("ready");
				buildTask();
			});
		}

		function buildTask() {
			tasks.length = 0;
			const curList = output.querySelectorAll("li")
			curList.forEach((el) => {
				const tempTask = {
					val: el.textContent,
					checked: false
				}
				if (el.classList.contains("ready")) {
					tempTask.checked = true;
				}
				tasks.push(tempTask);
			})
			saveTasks();
		}

		function saveTasks() {
			localStorage.setItem("taskList", JSON.stringify(tasks));
		}

		function createListItem() {
			const val = input.value;
			if (val.length > 0) {
				const myObj = {
					val: genItem(val, false)
				}
				tasks.push(myObj);
				saveTasks();
			}
		}

		btn.addEventListener("click", createListItem);