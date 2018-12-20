// 类型注解
let str1: string = 'hello '
let str2: string = 'typescript!'
let num: number = 3
let isTrue: boolean = false
document.write(str1 + str2)

function test(name:string): void {
  console.log(name)
}

function test2(z: string) {
  // console.log(z)
  let ele = null
  for (let i = 0; i < z.length; i++) {
    ele = z[i];
  }
  return z + ele
}
