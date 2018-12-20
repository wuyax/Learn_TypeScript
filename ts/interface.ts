// 接口
// 接口命名规范 https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-1.1/8bc1fexb(v=vs.71)
interface IPerson {
  firstName: string
  lastName: string
  readonly age: number
  addr?: string
  [propName: string]: any
}

function greeter(person: IPerson) {
  return 'Hello' + person.firstName + person.lastName + person.tel
}

let user: IPerson = {
  firstName: 'zhang',
  lastName: '',
  age: 22,
  tel: '15510002239'
}
user.lastName = 'min'
// user.age = 24
console.log(greeter(user))
