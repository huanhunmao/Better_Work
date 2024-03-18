
// 这些操作是可以的 ✅
// 这样的数组可转为 map new Map([['a',1]])
console.log(new Map([['a',1]])) // Map(1) { 'a' => 1 }

// Object.entries()
console.log(Object.entries({a:1, b:2, c: 3})) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

console.log(new Map(Object.entries({a:1, b:2, c: 3}))) // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }


// 如果直接 转 map 不可以的 ❌
// console.log(new Map({a:1, b:2, c: 3})) //  object is not iterable
console.log(new Map([1,2,3])) // Iterator value 1 is not an entry object