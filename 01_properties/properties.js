function setPropertiesOnObjLiteral(param)
{
	//debugger;
	param.x = 7;
	param.y = 8;
	param.onePlus = function(param) {
		return param + 1;
	};
}

function setPropertiesOnArrayObj(obj)
{
	obj.hello = function()
	{
		return "Hello!";
	};

	obj.full = "stack";

	obj[0] = 5; //should check if it's an array here with isArray() before assigning index 0 an object
	obj.twoTimes = function(input){
		return input * 2;
	};

}

function setPropertiesOnFunctionObj(input)
{
	input.year = 2015;
	input.divideByTwo = function(input){
		return input/2;
	};

	input.prototype.helloWorld = function(){
		return "Hello World";
	};

}