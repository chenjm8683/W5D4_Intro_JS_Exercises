// myEach
Array.prototype.myEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }

  return this;
}

//myMap
Array.prototype.myMap = function(func) {
  var result = [];

  function addResult(element) {
    result.push(func(element));
  }

  this.myEach(addResult);

  return result;
}

//myInject
Array.prototype.myInject = function(func) {
  var result;

  function injection(element) {
    if (typeof result === "undefined") {
      result = element;
    } else {
      result = func(result, element);
    }
  }

  this.myEach(injection);

  return result;
}
