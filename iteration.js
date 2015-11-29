// bubbleSort (this will modify the original array)
var bubbleSort = function(arr) {
  do{
    var sorted = true;

    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
  } while (!sorted)

  return arr;
}

// substrings
var substrings = function(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    var substring = "";
    for (var j = i; j < str.length; j++) {
      substring += str[j];
      result.push(substring);
    }
  }

  return result;
}
