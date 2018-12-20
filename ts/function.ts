// 函数声明
function foo(num1: number, num2: number): number {
  return num1 + num2
}
let total: number = foo(12, 21)
console.log(total)
// 函数表达式
const bar: (a: number, b: number) => number = function(x: number, y: number) {
  return x + y
}
console.log(bar(33, 34))

// 接口定义函数
interface IMyFunc {
  // 参数： 返回值类型
  (name: string, lastName?: string): string
}
let myFunc: IMyFunc = function(
  name: string = 'wang',
  lastName: string
): string {
  if (lastName) {
    return name + ' ' + lastName
  } else {
    return name
  }
}
console.log(myFunc('zhang', 'san'))

// 剩余参数
function rest(list: Array<number>, ...items: number[]): Array<number> {
  items.forEach((item, index) => {
    list.push(item)
  })
  return list
}
let a: number[] = []
console.log(rest(a, 2, 3, 4, 5, 6, 7))

// 重载
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  } else if (typeof x === 'string') {
    return x
      .split('')
      .reverse()
      .join('')
  }
}
