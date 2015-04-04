function createCalculator ()
{

	var calc = {};
	calc.num = 0;
	calc.value = function(input)
	{
		return this.num;
	};
	calc.add = function(input)
	{
		this.num += input;
	};
	calc.subtract = function(input)
	{
		this.num -= input;
	};
	return calc;
};