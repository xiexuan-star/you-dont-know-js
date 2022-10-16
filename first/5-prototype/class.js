{
  const foo = {};
  const bar = Object.create(null);
  console.log(foo.toString, bar.toString);

  console.log('------------------------------------ 1 end ---------------------------------');
}

{
  class Parent {
    foo = '1';

    fooFunction() {

    }
  }

  class Child extends Parent {
    bar = '2';

    barFunction() {

    }
  }

  const child = new Child;
  // class中的属性会直接设置进child，但是属性方法会通过原型被引用
  console.log(Parent.prototype === Child.prototype.__proto__);

  console.log('------------------------------------ 2 end ---------------------------------');
}

{
  // 通过function关键字定义一个函数时，同时也创建了它的prototype，这个原型对象的constructor指向这个函数
  function Foo() {}

  // 修改原型指向一个空对象，这个对象没有constructor属性
  Foo.prototype = {};
  const foo = new Foo();
  console.log(foo.constructor === Object); // true
  Object.defineProperty(Foo.prototype, 'constructor', { value: Foo, enumerable: false });
  console.log(foo.constructor === Foo); // true

  console.log('------------------------------------ 3 end ---------------------------------');
}

{

}
