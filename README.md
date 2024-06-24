# typescript-data-structure

基于 TypeScript 语言实现数据结构和算法

- TypeScript
- ESLint typescript-eslint Prettier
- ts-node

## 目录结构
```
typescript-data-structure
|- src
    |- types/   定义数据结构
        |- i-list.ts            线性表接口定义
        |- i-linked-list.ts     链表接口定义
        |- impl/    接口的实现类
            |- linked-list.ts   链表的实现
    |- demos/   数据结构的演示及案例
        |- linked-list-demo.ts  链表操作的演示
|- package.json
```

## 安装依赖：

```bash
pnpm i
```

## 测试运行：

- 链表的基本操作演示： `ts-node src/demos/linked-list-demo.ts`
