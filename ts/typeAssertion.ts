// 类型断言
// <type>value
function getLength(str: string | number): number {
  if ((<string>str).length) {
    return (<string>str).length
  } else {
    return str.toString().length
  }
}

// value as type
 function getLen(str: string | number): number {
   if((str as string).length) {
     return (str as string).length
   } else {
     return str.toString().length
   }
 }