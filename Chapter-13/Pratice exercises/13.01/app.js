function greet(fullName){
			console.log(`Hello ${fullName[0]} ${fullName[1]}`)
		}
		
		function user(name, callback){
			let spl = name.split(" ");
			callback(spl)
		}
		
		user("Alice Lutha", greet)