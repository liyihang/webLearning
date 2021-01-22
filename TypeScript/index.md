## 简介
#### 什么是TypeScript
TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持，它由 Microsoft 开发，代码开源于 GitHub 上。
#### Type的优缺点
……
#### TypeScript的安装
```js
npm install -g typescript
```

## 基础

#### 原始数据类型

JavaScript数据类型分为原始数据类型(Primitive Data Type)和对象数据类型(Object Types)

原始数据类型包括：布尔值、数值、字符串、`null`、`undefined` 以及 ES6 中的新类型 [`Symbol`](http://es6.ruanyifeng.com/#docs/symbol) 和 [`BigInt`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。

###### 布尔值 

布尔值是最基础的数据类型，在 TypeScript 中，使用 `boolean` 定义布尔值类型：

```js
let isDone:boolearn = false;
```

注意，使用构造函数 `Boolean` 创造的对象**不是**布尔值：

```ts
let createdByNewBoolean: boolean = new Boolean(1);
```

事实上 `new Boolean()` 返回的是一个 `Boolean` 对象：

```ts
let createdByNewBoolean: Boolean = new Boolean(1);
```

直接调用 `Boolean` 也可以返回一个 `boolean` 类型：

```ts
let createdByBoolean: boolean = Boolean(1);
```

在 TypeScript 中，`boolean` 是 JavaScript 中的基本类型，而 `Boolean` 是 JavaScript 中的构造函数。其他基本类型（除了 `null` 和 `undefined`）一样，不再赘述。

###### 数值 

数值就是`number`类型。

```ts
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```

`number `可表示十进制，二进制，八进制等。

###### 字符串类型

字符串类型就是由`string`定义的类型。

```js
let name:string = 'jimmy';
let age:Number = 28;
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
```

###### void

`JavaScript`中没有`void()`的概念，在`TS`中`void()`表示可以返回任何值。与`any`相反，一般是用在函数中，表示不返回任何值。

```js
function alertName(): void {
    alert('My name is Tom');
}
```

声明一个`void`的变量没有任何作用，它只能赋值`null`和`undefined`。

```typescript
let unusable:void = undefined；
```

###### `null`和`undefined`

在TypeScript中，undefined和null实际上都分别将其类型命名为undefined和null。就像void一样，它们本身并不是非常有用：

```ts
let u: undefined = undefined;
let n: null = null;
```

#### any

`any`用来表示可以被赋值为任意类型。



#### 类型推断

#### 联合类型

#### 对象类型-接口

#### 数组的类型

#### 函数类型

#### 类型断言

#### 声明文件

#### 内置对象

## 进阶

#### 类型别名

#### 字符串字面量类型

#### 元祖

#### 枚举

#### 类

#### 类与接口

#### 泛型

#### 声明合并

#### 扩展

## 工程

#### 代码检查

#### 编译选项

## 综合案例



