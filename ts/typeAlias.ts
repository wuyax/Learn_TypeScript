// 类型别名
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(name: NameOrResolver): Name {
  if (typeof name === 'string') {
    return name
  } else {
    return name()
  }
}

function setName(): Name {
  return 'wangsan'
}
console.log(getName('zhangsan'))
console.log(getName(setName))
