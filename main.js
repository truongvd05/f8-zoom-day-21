let numbers = [4, 5, 8, 9];

let users = [
    { name: "truong", score: 70 },
    { name: "toan", score: 80 },
    { name: "thuc", score: 90 },
];

let fruits = [
    "banana",
    ["orange", "watermelon", ["apple"]],
    "strawberry",
    ["pineapple"],
];
let fruits2 = ["mango", "grapes", "durian"];

console.log("number", numbers);
console.log("user ", users);
console.log("fruits", fruits);
console.log("fruits2", fruits2);

Array.prototype.flat2 = function (depth = 1) {
    if (depth === 0) {
        let result = [];
        for (let i = 0; i < this.length; i++) {
            if (i in this) {
                result.push(this[i]);
            }
        }
        return result;
    }

    function flatten(arr, currentDepth, result) {
        for (let i = 0; i < arr.length; i++) {
            if (i in arr) {
                let element = arr[i];
                if (Array.isArray(element) && currentDepth < depth) {
                    flatten(element, currentDepth + 1, result);
                } else {
                    result.push(element);
                }
            }
        }
    }

    let result = [];
    flatten(this, 0, result);
    return result;
};

let newFruits2 = fruits.flat2(1);
console.log("flat2: làm phẳng fruits. chỉ làm phẳng ifinity :))", newFruits2);

Array.prototype.push2 = function (...thisArg) {
    let length = thisArg.length;
    for (let i = 0; i < length; i++) {
        // thêm phần tử vào cuối mảng và tăng độ dài
        this[this.length] = thisArg[i];
    }
    return this.length;
};

numbers.push2(1, 2);
console.log("push2: number.push(1, 2)", numbers);

Array.prototype.concat2 = function (...arr) {
    let newArr = [];
    let length = this.length;
    let newArrLength = arr.length;
    for (let i = 0; i < length; i++) {
        // tạo ra mảng mới vi concat không làm thay đổi mảng cũ
        newArr[i] = this[i];
    }
    for (let i = 0; i < newArrLength; i++) {
        // thêm phần tử vào cuối mảng và tăng độ dài
        newArr[newArr.length] = arr[i];
    }
    // vì concat làm phảng 1 cấp
    newArr = newArr.flat(1);
    return newArr;
};

let newFruits = fruits2.concat2(fruits, "plum");
console.log("concat2: fruits2 + fruits", newFruits);

Array.prototype.find2 = function (callback, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        // bỏ qua phần tử trống
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                return this[i];
            }
        }
    }
};

let resultNumber = numbers.find2((number) => number > 5);

console.log("find2: number > 5:", resultNumber);

Array.prototype.map2 = function (callback, thisArg) {
    const length = this.length;
    // tạo mảng mới có độ dài bằng mảng cũ để có thể lặp qua phần tử empty
    let newArr = new Array(length);
    for (let i = 0; i < length; i++) {
        if (i in this) {
            newArr[i] = callback.call(thisArg, this[i], i, this);
        }
    }
    return newArr;
};

let resultMap = numbers.map2((number) => number * 2);

console.log("map2: number * 2", resultMap);

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

console.log("every2: score > 80:", resultsEvery);

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

console.log("some2: score > 80: ", resultsSome);

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

console.log("fillter2: number > 2:", resultFilter);
