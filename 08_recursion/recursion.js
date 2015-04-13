function factorialIterative(num){
	var total = 1;
	for (var i = num; i > 0; i--) {
		total *= i;
	}
	return total;
};

function factorial(num){
	var total = num;
	if(num === 0){
		return 1;
	}
	else{
		total *= factorial(num-1);
	}
	return total;
}

function fib(num){
	//<1 stops fib(0) from going into infinite loop
	if (num < 2){
		return 1;
	}
	else {
		return fib(num-1) + fib(num-2);
	}
}

var type = function (input){
	//I honestly have no idea why we need Obj.proto.tS.call at all.
	//The name of what the object is is stored in
	//Object.__proto__.constructor.name
	var foobar = Object.prototype.toString.call(input);
	//I guess the joke is that "[object String]" is litterally a string.
	//Yet when you dir(O.p.tS.c(foo)), you get nothing but a string line.
	//Not even a __proto__ that all objects in JS have. 
	return foobar.slice(8, foobar.length-1);
}
		/* 
		expect(type(und)).toEqual('Undefined');
    expect(type(nll)).toEqual('Null');
    expect(type(bool)).toEqual('Boolean');
    expect(type(num)).toEqual('Number');
    expect(type(str)).toEqual('String');
    expect(type(fnc)).toEqual('Function');
    expect(type(arr)).toEqual('Array');
    expect(type(obj)).toEqual('Object');
    */

function stringify(foo){
	var total = "";
	switch (type(foo)){
		case "Undefined":
				total += "undefined";
			break;
		case "Null":
				total += "null";
			break;
		case "Boolean":
				total += String(foo);
			break;
		case "Number":
				total += String(foo);
			break;
		case "String":
				total += '\"'+String(foo)+'\"';
			break;
		case "Function":
				total += String(foo);
			break;
	}
	// Instead of simply add it together into
	// strings by brute force,
	// Another way to do this (arrays) would've been
	// to simply return the elements of the deepest
	// array and insert it into the position of the parent
	// array and then using a single .join(",") method.
	// [1[2,3]4] would become [1,2,3,4] before joining it.
	// But it seemed like too much pain for too little gain.

	if (type(foo) === "Array"){
		total += "[";
		for (var i = 0; i < foo.length; i++){
			if (i === foo.length-1){
				//Do not add comma for the last element
				total += stringify(foo[i]);
			}
			else{
				total += stringify(foo[i])+",";
			}
		}
		total+="]";
	}

	if (type(foo) === "Object"){
		total+= '{';
		for(var i  in foo){
			total+= '\"'+i+'\"' +': '+ stringify(foo[i])+',';
		}
		total = total.slice(0,-1);
		total += '}';
	}

	return total;
}