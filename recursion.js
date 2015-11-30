'use strict'
// range
function range(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    var result = range(startNum, endNum - 1);
    result.push(endNum);
    return result;
  }
}

// exp1
function exp1(b, n) {
  if (n === 0) {
    return 1;
  } else {
    return b * exp1(b, n - 1);
  }
}

// exp2
function exp2(b, n) {
  if (n === 0) {
    return 1;
  } else {
    var temp = exp2(b, Math.floor(n / 2));
    if (n % 2 === 0) {
      return temp * temp;
    } else {
      return b * temp * temp;
    }
  }
}

// Fibonacci
function fibonacci(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var arr = fibonacci(n - 1);
    var len = arr.length;
    var num = arr[len - 1] + arr[len - 2]
    arr.push(num)
    return arr;
  }
}

// binarySearch1
function binarySearch1(array, target) {
  if (array.length === 0){
    return null;
  } else {
      var pivotIdx = Math.floor(array.length / 2);
      var pivot = array[pivotIdx];
      if (target === pivot){
        return pivotIdx;
      } else if (target > pivot){
        var result = binarySearch1(array.slice(pivotIdx + 1, array.length), target);
        if (result === null) {
          return null;
        } else {
          return (pivotIdx + result);
        }
      } else {
        var result = binarySearch1(array.slice(0, pivotIdx), target);
        if (result === null) {
          return null;
        } else {
          return pivotIdx;
        }
      }
  }
}


function binarySearch2(array, target, minIdx, maxIdx) {
  if (typeof minIdx === 'undefined') {
    minIdx = 0;
    maxIdx = array.length - 1;
  } else if (minIdx > maxIdx){
      return null;
  } else {
      var pivotIdx = Math.floor((maxIdx - minIdx) / 2);
      var pivot = array[pivotIdx];
      if (pivot === target){
        return pivotIdx
      } else if (pivot > target){
        return binarySearch2(array, target, minIdx, pivot - 1);
      } else {
        return binarySearch2(array, target, pivot + 1, maxIdx);
    }
  }
}

// makeChange
function makeChange(amount, coins) {
  if (amount < 0) {
    return null;
  } else if (amount === 0){
    return [];
  } else {
    var bestResult = null;
    coins.forEach(function(coin){
      var result = makeChange((amount - coin), coins);
      if (result !== null) {
        result.push(coin);
        if (bestResult === 0 || bestResult.length > result.length) {
          bestResult = result;
        }
      }
    })
    return bestResult;
  }
}

// mergeSort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    var midIdx = Math.floor(arr.length / 2);
    var left = arr.slice(0, midIdx);
    var right = arr.slice(midIdx, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  var result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}

// subsets
function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  } else {
    var firstEl = arr[0];
    var subs = subsets(arr.slice(1));

    var newSubs = subs.map(function(sub) {
      return [firstEl].concat(sub);
    })

    return subs.concat(newSubs);
  }
}
