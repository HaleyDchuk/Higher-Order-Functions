// exercises.js
//Author: Haley Danylchuk 


module.exports = { 
	sum: sum, 
	repeatCall: repeatCall, 
	repeatCallAllArgs: repeatCallAllArgs, 
	makePropertyChecker: makePropertyChecker, 
	constrainDecorator: constrainDecorator, 
	limitCallsDecorator: limitCallsDecorator
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
	var x; 
	for(x = 0; x<n; x++){ 
		fn(arg); 
	}
}


//I am not sure why this function is failing the test 
function repeatCallAllArgs(fn, n){ 
	var x; 
	console.log("ARGUMENTS"); 
	console.log(arguments); 
	for(x = 0; x < n; x++){
	
			fn.apply(this, arguments); 
	}
}

function makePropertyChecker(prop){ 
	var obj = {}; 
	function checker(obj){
		if(obj.hasOwnProperty(prop)){
			return true;
		}else{
			return false; 
		}
	}
	return checker; 

}

//fn the function to modify (decorate)
//min - the minimum value that fn can return 
//max - the maximum value that fn can return 
//returns a function that does the same thing as the original function 
////that is, calls fn 
//accepts the same number of arguments as the original function, fn 
//the return value is the return value of fn, unless it is less than 
//min or greater than max, in which case it returns min or max 
function constrainDecorator(fn, min, max){ 
	return function(arg){
		var returned = fn(arg); 
		if(returned < min){ 
			return min; 
		} else if (returned > max){ 
			return max; 
		} else { 
			return returned; 
		}

	}

}


//I printed out the value of counter, and it is not incrementing, 
//so undefined is never retuned 
//I tried a lot of different things to try and get counter to increment, 
//like a for loop, while loop, and an if statement, but I couldn't get it.
//I think that is why this function is failing the test. 
function limitCallsDecorator(fn, n){ 
	var counter = 0; 
	return function(arg){
	
		var returned = fn(arg); 
		console.log(counter); 
		while(counter < n){ 
			counter = counter + 1; 
			return returned; 

		} 
		return undefined; 
	}
}

