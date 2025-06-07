let numbers = [1, 2, , 6, 7, 8, , ,];

let users = [
    { name: "truong", score: 70 },
    { name: "toan", score: 80 },
    { name: "thuc", score: 90 },
];

console.log("number", numbers);
console.log("user ", users);

Array.prototype.find2 = function (callback, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                return this[i];
            }
        }
    }
    return undefined;
};

let resultNumber = numbers.find((number) => number > 5);

console.log("find2:", resultNumber);

Array.prototype.map2 = function (callback, thisArg) {
    const length = this.length;
    let newArr = new Array(length);
    for (let i = 0; i < length; i++) {
        if (i in this) {
            newArr[i] = callback.call(thisArg, this[i], i, this);
        }
    }
    return newArr;
};

let resultMap = numbers.map2((number) => number * 2);

console.log("map2: ", resultMap);

Array.prototype.every2 = function (callback, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                return false;
            }
        }
    }
    return true;
};

let resultsEvery = users.every((users) => users.score > 80);

console.log("every2", resultsEvery);

Array.prototype.some2 = function (callback, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                return true;
            }
        }
    }
    return false;
};

let resultsSome = users.some2((users) => users.score > 80);

console.log("some2", resultsSome);

Array.prototype.filter2 = function (callback, thisArg) {
    const length = this.length;
    let newArr = [];
    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                newArr.push(this[i]);
            }
        }
    }
    return newArr;
};

let resultFilter = numbers.filter2((number) => number > 2);

console.log("fillter2", resultFilter);
