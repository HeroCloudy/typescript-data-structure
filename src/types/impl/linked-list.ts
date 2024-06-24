import ILinkedList from '../i-linked-list'

/**
 * 链表的每个节点
 */
export class Node<T> {
  /**
   * 节点对应的数据
   */
  value: T

  /**
   * 指向下一个节点的指针
   */
  next: Node<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

/**
 * 链表的实现类
 */
class LinkedList<T> implements ILinkedList<T> {

  /**
   * 头结点
   */
  private head: Node<T> | null = null

  /**
   * 链表的长度
   * @private
   */
  private length: number = 0

  add(value: T): void {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }

    this.length++
  }

  get(position: number): T | null {
    if (position < 0 || position >= this.size) {
      return null
    }
    return this.getNode(position)?.value ?? null
  }

  indexOf(value: T): number {
    let index = 0
    let current = this.head
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  insert(value: T, position: number): boolean {
    if (position < 0 || position > this.length) {
      return false
    }

    const newNode = new Node(value)

    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      const previous = this.getNode(position - 1)
      newNode.next = previous!.next
      previous!.next = newNode
    }

    this.length++

    return true
  }

  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) {
      return null
    }

    let current = this.head

    if (position === 0) {
      this.head = this.head?.next ?? null
    } else {
      const previous = this.getNode(position - 1)
      current = previous!.next
      previous!.next = current?.next ?? null
    }

    this.length--

    return current?.value ?? null
  }

  remove(value: T): boolean {
    const index = this.indexOf(value)
    return this.removeAt(index) !== null
  }

  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) {
      return false
    }
    const current = this.getNode(position)
    current!.value = value
    return true
  }

  traverse(): string {
    const values: T[] = []
    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }
    return values.join(' -> ')
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  get size(): number {
    return this.length
  }

  peek(): T | undefined {
    return this.head?.value ?? undefined
  }

  private getNode(position: number): Node<T> | null {
    let index = 0
    let current = this.head

    while (index++ < position && current) {
      current = current.next
    }
    return current
  }
}

export default LinkedList