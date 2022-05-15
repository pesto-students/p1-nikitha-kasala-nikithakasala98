// const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// let result = hasDuplicate([1, 5, -1, 4]); // false
// console.log(result);

function hasDuplicate(DArr) {
  const set = new Set(DArr);

  if (set.size !== DArr.length) {
    return false;
  }
  return true;
}

result = hasDuplicate([1, 2, 3, 4, 5, 6]); // false
console.log(result);

result = hasDuplicate([1, 1, 3, 1, 2, 3]); // true
console.log(result);