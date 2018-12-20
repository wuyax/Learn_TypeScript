// 定义类型
let fib: number[] = [1, 1, 2, 3, 5, 8, 13]
// 数组泛型
let fibonacci: Array<number> = [1, 1, 2, 3, 5, 8, 13]
// 接口表示
interface IArray {
  [index: number]: string
}
let fib2: IArray = ['1', '1', '2', '3', '5', '8', '13']
// any
let list:any[] = [2,'23',{name: 'zhang'}]
// 类数组
function sum():void {
  // IArguments 是内置的接口
  let arg:IArguments = arguments
  console.log(arg)
}