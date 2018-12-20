// 类型断言
// <type>value
function getLength(str) {
    if (str.length) {
        return str.length;
    }
    else {
        return str.toString().length;
    }
}
// value as type
function getLen(str) {
    if (str.length) {
        return str.length;
    }
    else {
        return str.toString().length;
    }
}
