import IList from './i-list'

/**
 * 链表 接口定义
 */
interface ILinkedList<T> extends IList<T> {

  /**
   * 插入元素到链表末尾
   * @param value 要插入的数据
   */
  add(value: T): void

  /**
   * 获取指定位置的元素
   * @param position  查询的位置（从 0 开始计数）
   */
  get(position: number): T | null

  /**
   * 元素在链表中的位置（索引），如果没有该元素就返回 -1
   * @param value 查询的元素
   */
  indexOf(value: T): number

  /**
   * 向链表的指定位置插入一个元素，返回是否插入成功
   * @param value 要插入的数据
   * @param position 插入的位置（从 0 开始计数）
   */
  insert(value: T, position: number): boolean

  /**
   * 删除指定位置的元素，返回被删除的元素
   * @param position  删除的位置（从 0 开始计数）
   */
  removeAt(position: number): T | null

  /**
   * 删除第一个值为 value 的元素，返回是否删除成功
   * @param value 删除的元素
   */
  remove(value: T): boolean

  /**
   * 修改指定位置的元素，返回是否修改成功
   * @param value 新的值
   * @param position 指定的位置
   */
  update(value: T, position: number): boolean

  /**
   * 遍历链表
   */
  traverse(): string
}

export default ILinkedList
