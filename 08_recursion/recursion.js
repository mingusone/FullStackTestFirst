function factorialIterative(num){
	var total = 1;
	for (var i = num; i > 0; i--) {
		total *= i;
	}
	return total;
};

function factorial(num){
	var total = 1;
	if(num === 0){
		return 1;
	}
	else{
		total *= factorial(num-1);
	}
	return total;
}