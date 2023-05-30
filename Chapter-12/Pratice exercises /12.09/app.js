let myList = [
			{
				"name": "Learn JavaScript ",
				"status": true
				},
			{
				"name": "Try JSON",
				"status": false

				}]
		let newStr = JSON.stringify(myList);
		let newObj = JSON.parse(newStr);
		newObj.forEach( js=>{
			console.log(`${js.name} : ${js.status}`)
		})