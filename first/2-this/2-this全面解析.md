## 2.1 调用位置

## 2.2 绑定规则

### 2.2.1 默认绑定(独立函数调用)

### 2.2.2 隐式绑定(被对象所引用)

只对调用时的引用起效，经过任意情况的赋值则无效

### 2.2.3 显式绑定(call/bind/apply)

### 2.2.4 new 绑定

实际上js中并不存在构造函数，只存在构造函数调用，new调用会修改this指向为新创建的对象

## 2.3 优先级

new > 显式 > 隐式 > 默认

## 2.4 被忽略的this

### 2.4.1 被忽略的this

当硬绑定的this为null/undefined时，绑定会被忽略（会应用默认绑定）

⭐️安全的this

不使用null/undefined，使用DMZ(非军事区)(符号为Ø)(Object.create(null));

### 2.4.2 间接引用

如赋值表达式的引用为函数自身而非对象

(foo.a = bar.a)() 此时应用默认绑定

### 2.4.3 软绑定

执行this检测，如this指向window/global或者null/undefined，修正为目标对象，否则应用当前环境的this

```javascript
function softBind(fn, that, ...args) {
  return function () {
    return fn.bind((this == null || this === (window || global)) ? that : this, ...args)
  }
}
```

## 2.5 this的词法

this在箭头函数中指向定义时的词法作用域（且无法修改，new也不行）
