{
  const foo = { a: 1 };
  const bar = { _b: 2, get b() { return bar._b; }, set b(v) { bar._b = v; } };

  Object.setPrototypeOf(foo, bar);

  console.log(foo.b); // 2
  console.log('b' in foo); // true
  for (const key in foo) {
    console.log('keyInFoo=>', key);
  }
  foo.b = 4; // 如果原型链上存在b的setter，那么会调用该setter而非直接给foo的b属性赋值
  console.log(foo.b, bar.b); // 4 4

  console.log('------------------------------------ end ---------------------------------');
}

{
  const foo = { a: 1 };
  const bar = {};
  Object.defineProperty(bar, 'b', { value: 2, writable: false });
  Object.setPrototypeOf(foo, bar);

  console.log(foo.b);

  foo.b = 4; // 赋值被忽略了
  console.log(foo.b, bar.b);
}
