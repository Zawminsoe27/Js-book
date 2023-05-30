let area1 = document.querySelector("textarea[name='txtarea']")
let area2 = document.querySelector("textarea[name= 'txtarea2']");
let btn = document.querySelector("button");


let alert= document.querySelector(".alert");
alert.style.display = "none";

btn.addEventListener("click", lookup);

function lookup() {
	let inputVal = area1.value;
	let edata = inputVal.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
	
	let holder = [];
	
	if(edata && edata.length > 0){
		
		for( i =0; i<edata.length;i++)
		{
			if(holder.indexOf(edata[i]) == -1)
			{
				holder.push(edata[i])
			}
		}
		area2.value = holder.join()

	}
}

area1.addEventListener("click", () => {
	alert.style.display = "none"
})
area2.addEventListener("click", () =>{
	alert.classList.add("alert", "alert-danger", "text-center");
	alert.textContent = "Can't edit this data ⚠️"
	alert.style.display = "block"
})
