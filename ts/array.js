// 定义类型
var fib = [1, 1, 2, 3, 5, 8, 13];
// 数组泛型
var fibonacci = [1, 1, 2, 3, 5, 8, 13];
var fib2 = ['1', '1', '2', '3', '5', '8', '13'];
// any
var list = [2, '23', { name: 'zhang' }];
// 类数组
function sum() {
    // IArguments 是内置的接口
    var arg = arguments;
    console.log(arg);
}
