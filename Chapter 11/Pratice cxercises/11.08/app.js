const inputFields = document.querySelectorAll("input");
        const output = document.querySelector(".output");

        inputFields.forEach(ele => {
            ele.addEventListener("keydown", (e) => {
                if (!isNaN(e.key)) {
                    output.textContent += e.key;
                }
            });

            ele.addEventListener("keyup", (e) => {
                console.log(e.key)
            });

            ele.addEventListener("paste", () => {
                console.log("pasted")
            })

        })