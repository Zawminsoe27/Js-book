let output = document.querySelector(".output1");
        let first = document.querySelector("input[name='first']")
        let last = document.querySelector("input[name='last']");
        first.addEventListener("change", (e) => {
            console.log("change")
            displayText(first.value);
        });
        first.addEventListener("blur", () =>{
            console.log("blur")
        })
        first.addEventListener("focus", ()=> {
            console.log("Focus")
        })
        
       last.addEventListener("change", (e) => {
           displayText (last.value)
       })
       last.addEventListener("blur", () => {
           console.log("blur")
       })
       
       last.addEventListener("focus", () => {
           console.log("Focus")
       });
        
        function displayText(str) {
            output.textContent = str;
        }