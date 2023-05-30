
	function test(val) {
		try{
			if(isNaN(val)){
				throw "That is not a number"
			} else {
				console.log("True")
			}
		}
		catch(e){
			console.error(e)
		} finally {
			console.log("Done " + val)
		}
	};