// myUniq
Array.prototype.myUniq = function() {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    if (result.indexOf(this[i]) === -1) {
      result.push(this[i]);
    }
  }

  return result;
}

// myTwoSum
Array.prototype.myTwoSum = function() {
  var result = [];

  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if ( (this[i] + this[j]) === 0 ) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

// myTranspose
Array.prototype.myTranspose = function() {
  var result = [];

  for (var row = 0; row < this[0].length; row++) {
    result.push([]);
    for (var col = 0; col < this.length; col++) {
      result[row].push(this[col][row]);
    }
  }

  return result;
}
