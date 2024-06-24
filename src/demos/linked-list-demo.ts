import LinkedList from '../types/impl/linked-list'
import ILinkedList from '../types/i-linked-list'

const list: ILinkedList<string> = new LinkedList<string>()

list.add('a')
list.add('b')
list.add('c')
list.add('d')

console.log('初始化：', list.traverse()) // a -> b -> c -> d

list.insert('1', 0)
list.insert('2', 2)
list.insert('3', 6)
console.log('依次在位置 0、2、6 分别插入1、2、3：', list.traverse()) //  // 1 -> a -> 2 -> b -> c -> d -> 3

console.log('position为 5 的元素', list.get(5))
console.log('peek', list.peek())
console.log('元素 a 的索引：', list.indexOf('a'))
console.log('删除索引 3 的元素', list.removeAt(3))
console.log(list.traverse())

console.log('删除值为 d 的元素', list.remove('d'))
console.log(list.traverse())

console.log('修改索引为3的元素，赋值为100', list.update('100', 3))
console.log(list.traverse())

console.log(`链表是否为空：${list.isEmpty()}`)
console.log(`链表长度：${list.size}`)
export {}