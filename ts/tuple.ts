// 元组
let someone: [string, number] = ['zhangsan', 24]
someone[0] = 'lisi'
someone[1] = 22

console.log(someone[1])

// 越界的元素
someone.push('zhaowu')
// someone.push(true)