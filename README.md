# Recap JavaScript

## Method of primitives - Summery

> Let’s look at the key distinctions between primitives and objects.

> A Primitives

- There are 7 primitives type: `string` `number` `BigInt` `boolean` `Symbol` `null` and `undefined`
- Primitives must be as fast and lightweight as possible.

> An Objects

- Is capable of storing multiple values as properties.
- Can be created with `{}`, for instance: `{name: "John", age: 30}`. There are other kinds of objects in JavaScript: `functions`, for example, are objects.

> Object are "heavier" than primitives. They require additional resources to support the internal machinery.

- In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.

- Objects are always truthy in if, so here the alert will show up:

```
let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}
```

> Summery
- Primitives except null and undefined provide many helpful methods.
- Formally, these methods work via temporary objects, but JavaScript engines are well tuned to optimize that internally, so they are not expensive to call.

