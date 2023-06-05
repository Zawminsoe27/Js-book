let promise = new Promise((res,rej) =>{
	res("Start counting...")
})

function getVal(val){
	console.log(val)
}
promise.then(res=>{
	getVal(res)
	return "one"
})
.then(res=>{
	getVal(res)
	return "two"
})
.then(res =>{
	getVal(res)
	return "three"
})
.then(res =>{
	getVal(res)
})