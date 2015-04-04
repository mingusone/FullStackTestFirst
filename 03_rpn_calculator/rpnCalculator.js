function RPNCalculator ()
{
	this.stack = [];
}

RPNCalculator.prototype.push = function (input) {
	this.stack.push(input);
};

RPNCalculator.prototype.value = function(val) {
	return this.stack[this.stack.length - 1];
};


// All the if/else statements here are bad. Must
// figure out how to simply do a checkStack() later
// and use it in all functions below since all the exceptions
// are the same string. 

RPNCalculator.prototype.plus = function ()
{
	if (this.stack.length < 2){
		throw("rpnCalculator is empty");
	}	
	else{
		this.stack.push( this.stack.pop() + this.stack.pop() );
	}
};

RPNCalculator.prototype.minus = function ()
{
	if (this.stack.length < 2){
		throw("rpnCalculator is empty");
	}	
	else{
	this.stack.push( (this.stack.pop() * -1) + this.stack.pop() );
	}
}; //Have to use * -1 on the first element poped because 
// first poped minus second poped is wrong. Polis math demands
// last poped minus first poped. The last one poped is at
// the front of the equation. 

RPNCalculator.prototype.times = function ()
{
	if (this.stack.length < 2){
		throw("rpnCalculator is empty");
	}	
	else{	
	this.stack.push( this.stack.pop() * this.stack.pop() );
	}
};

RPNCalculator.prototype.divide = function ()
{
	if (this.stack.length < 2){
		throw("rpnCalculator is empty");
	}	
	else{	
	var first = this.stack.pop();
	this.stack.push( this.stack.pop() / first );
	}
};

