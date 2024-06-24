/**
 * 线性表通用接口
 */
interface IList<T> {

  /**
   * 线性表是否为空
   */
  isEmpty(): boolean

  /**
   * 线性表中的元素个数
   */
  get size(): number

  /**
   * 获取线性表中的第一个元素（只获取、不移除）
   */
  peek(): T | undefined
}

export default IList