var Mammal = function (name){
	this.name = name;
	this.offspring = [];
};

Mammal.prototype.sayHello = function(){
	return ("My name is "+this.name+", I'm a Mammal");
};

Mammal.prototype.haveBaby = function(name){
	var defaultName = "Baby "+this.name;
	var child = new Mammal(name || defaultName);
	this.offspring.push(child);
	return child;
};

var Cat = function(name, color){
	Mammal.call(this, name);
	this.color = color;
}

Cat.prototype.haveBaby = function(color) {
	var babyName = "Baby "+this.name;
	var child = new Cat(babyName, color);
	this.offspring.push(child);
	return child;
};