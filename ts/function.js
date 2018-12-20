// 函数声明
function foo(num1, num2) {
    return num1 + num2;
}
var total = foo(12, 21);
console.log(total);
// 函数表达式
var bar = function (x, y) {
    return x + y;
};
console.log(bar(33, 34));
var myFunc = function (name, lastName) {
    if (name === void 0) { name = 'wang'; }
    if (lastName) {
        return name + ' ' + lastName;
    }
    else {
        return name;
    }
};
console.log(myFunc('zhang', 'san'));
// 剩余参数
function rest(list) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item, index) {
        list.push(item);
    });
    return list;
}
var a = [];
console.log(rest(a, 2, 3, 4, 5, 6, 7));
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x
            .toString()
            .split('')
            .reverse()
            .join(''));
    }
    else if (typeof x === 'string') {
        return x
            .split('')
            .reverse()
            .join('');
    }
}
