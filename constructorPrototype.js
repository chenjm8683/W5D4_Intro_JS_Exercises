function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  var statement = this.owner + " loves " + this.name + ".";
  return statement;
}

// override cuteStatement
Cat.prototype.cuteStatement = function() {
  var statement = "Everyone loves " + this.name + "!";
  return statement;
}

Cat.prototype.meow = function() {
  console.log(this.name + " is meowing!");
}

// cuteStatement tests
var cat1 = new Cat("Gizmo", "Ned");
var cat2 = new Cat("Paulie", "Colin");
cat1.cuteStatement();
cat2.cuteStatement();

// set the meow property on the cat2 instance
cat2.meow = function() {
  console.log(this.name + ": meow meow...");
}
