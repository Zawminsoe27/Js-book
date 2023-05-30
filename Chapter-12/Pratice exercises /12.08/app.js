let language = [
			{
				"name":"JSON",
				"Type":"Data format"
				
			}, 
			{
				"name" :"Python",
				"Type" : "Machine language"
			},
			{
				"name" :"Javascript",
				"Type" : "Multi paradigm language"
			}
		]
			function invoke() {
			language.forEach( li=> {
				console.log(`${li.name} : ${li.Type}`)
			})
			}
			
			invoke();