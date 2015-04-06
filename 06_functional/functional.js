// 06_Functional 
function doubler(input){
return input*2;
}

function map(arr, iterator){
	for (var i = 0; i < arr.length; i++) {
		arr[i] = iterator(arr[i]);
	};
	return arr;
}

function filter(arr, theFilter){
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (theFilter(arr[i])){
			newArr.push(arr[i]);
		}
	};
	return newArr;
}

function contains(arr, val){
	for (var i in arr) {
		if(arr[i] === val){
			return true;
		}
	};
	return false;
}

function countWords(leString){
	arr = leString.split(' ');
	return arr.length;
}

function reduce(arr, start, func){
	current = start;
	for (var i = 0; i < arr.length; i++) {
		current = func(current, arr[i]);
	};
	return current;
}

function countWordsInReduce(a, b){
	return a + countWords(b);
}

function sum(arr){
	return reduce(arr,0,function(a,b){
		return a+b;
	});
}

function every(arr,func){
	state = true;
	for (var i = 0; i < arr.length && state; i++) {
		state = func(arr[i]);
	};
	return state;
}

function any(arr,func){
	state = false;
	for (var i = 0; i < arr.length && !state; i++) {
		state = func(arr[i]);
	};
	return state;
}