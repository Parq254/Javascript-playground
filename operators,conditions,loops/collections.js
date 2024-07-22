let myArray = ['Chris','Eve', 1, 2, true]

console.log(myArray[0])
console.log(myArray[3])

myArray.forEach(Element => {
    console.log(Element)
})

for (const [index, value] of Object.entries(myArray)){
        console.log(index, '-', value);
    }

let myMap = new Map()

myMap.set('name','Chris')
myMap.set('age', 30)

myMap.forEach((val,key) => {
    console.log(key, '-', val)
})
