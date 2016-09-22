// exercises.js
//Author: Haley Danylchuk 


module.exports = { 
	sum: sum, 
	repeatCall: repeatCall
}

//returns the sum of the arguments as a Number 
//the sum of no arguments is 0 
function sum(){ 
	var numArgs = arguments.length; 
	var sum = 0; 
	if (numArgs <= 0){ 
		return 0; 
	}else { 
		var x; 
		for(x = 0; x < numArgs; x++){ 
		sum += arguments[x]; 
	}

	}
	return sum; 
	
}

//fn the function to be called repeatedly 
//n the number of times to call function, fn 
//arg - the arguments to pass to a function, fn, when called 
//returns undefined; no return value 
function repeatCall(fn, n, arg){ 
	
	function fn(arg){ 
		console.log(arg); 
	}
	var x; 
	for(x = 0; x < n; x++){ 
		fn(n); 
	}
}

