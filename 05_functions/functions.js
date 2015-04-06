function concat_string(){
	var thing = Array.prototype.slice.call(arguments).join("");
	return thing;
}

function yourFunctionRunner(){
	var str = "";
	for(var i in arguments){
		str += arguments[i]();
	}
	return str;
}

function makeAdder(inp){
	var num = inp;
	function func(inp2){
		num+=inp2;
		return num;
	}
	return func;
}

function once(input)
{
	var hasRun = false;
	return function(){
		if(!hasRun){
			input();
			hasRun = true;
		}
	}
}

function createObjectWithTwoClosures(){
	var sum = 0;
	var theObject = {
			getValue : function(){
			return sum;
			},

			oneIncrementer : function(){
			sum += 1;
			},

			tensIncrementer : function(){
			sum += 10;
			}
		}
	return theObject;
}























