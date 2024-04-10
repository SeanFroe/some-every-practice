// SOME FUNCTIONS

// hasOddNumber() FUNCTION

function hasOddNumber(arr) {
  return arr.some(function (val) {
    return val % 2 !== 0;
  });
}

console.log(hasOddNumber([1, 2, 2, 2, 2, 2, 4]), "hasOddNumber"); // true
console.log(hasOddNumber([2, 2, 2, 2, 2, 4]), "hasOddNumber"); // false

// hasAZero() FUNCTION

function hasAZero(num) {
  return num
    .toString()
    .split("")
    .some(function (val) {
      return val === "0";
    });
}

console.log(hasAZero(33321232131012), "hasAZero"); // true
console.log(hasAZero(1212121), "hasAZero"); // false

// EVERY FUNCTIONS

// hasOnlyOddNumbers FUNCTION
function hasOnlyOddNumbers(num) {
  return num.every(function (val) {
    return val % 2 !== 0;
  });
}

console.log(hasOnlyOddNumbers([1, 3, 5, 7]), "hasOnlyOddNumbers"); // true
console.log(hasOnlyOddNumbers([1, 2, 3, 5, 7]), "hasOnlyOddNumbers"); // false

// hasNoDuplicates() FUNCTION

function hasNoDuplicates(num) {
  return num.every(function (val) {
    return num.indexOf(val) === num.lastIndexOf(val);
  });
}

console.log(hasNoDuplicates([1, 2, 3, 1]), "hasNoDupliicates"); // false
console.log(hasNoDuplicates([1, 2, 3]), "hasNoDupliicates"); // true

// hasCertainKey() FUNCTION

function hasCertainKey(arr, key) {
  return arr.every(function (val) {
    return key in val;
  });
}

let arr = [
  { title: "Instructor", first: "Elie", last: "Schoppik" },
  { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: "Matt", last: "Lane" },
  { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
];

console.log(hasCertainKey(arr, "first"), "hasCertainKey"); // true
console.log(hasCertainKey(arr, "isCatOwner"), "hasCertainKey"); // false

// hasCertainValue() FUNCTION

function hasCertainValue(arr, key, Value) {
  return arr.every(function (val) {
    return val[key] === Value;
  });
}

console.log(hasCertainValue(arr, "title", "Instructor"), "hasCertainValue"); // true
console.log(hasCertainValue(arr, "first", "Elie"), "hasCertainValue"); // false
