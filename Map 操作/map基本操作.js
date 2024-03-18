

// 创建
let myMap = new Map()
let goodMap = new Map([['key1', 'value1'], ['key2', 'value2']])
console.log(goodMap) // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// set
const setMap = myMap.set('key', 'value')
console.log(setMap)  // Map(1) { 'key' => 'value' }

// get
const value = myMap.get('key')
console.log(value) // value

// has
const hasKey = myMap.has('key')
const hasKey1 = myMap.has('key1')
console.log(hasKey) // true
console.log(hasKey1) // false

// delete
myMap.delete('key')
console.log(myMap) // Map(0) {}

// 迭代
// 所有值
const myMap2 = new Map([['a',1],['b',2]])
for(const [key,value] of myMap2){
    console.log(`${key} ${value}`) // a 1  b 2
}

// 键
for(let key of  myMap2.keys()){
    console.log(key) // a b
}

// 值
for(let value of myMap2.values()){
    console.log(value)  // 1 2
}

// 键值对
for(let entry of myMap2.entries()){
    console.log(entry) // [ 'a', 1 ] [ 'b', 2 ]
}

// size
console.log(myMap2.size) // 2

// 清除所有键值对
myMap2.clear()
console.log(myMap2) // Map(0) {}


// 映射（map）操作
const myMap3 = new Map([['ppx',666], ['xxx',999]])
const transformValue = (value) => {
    return value + 2
}
let newMap = new Map(Array.from(myMap3.entries()).map(([key,value]) => [key, transformValue(value)]))
console.log(newMap) // Map(2) { 'ppx' => 668, 'xxx' => 1001 }