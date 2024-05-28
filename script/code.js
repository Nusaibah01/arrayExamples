//  ====How to create an Array====
//  Array Literal
let numbers = [9, 3, 8, 11]
console.log(numbers)

// Add a new element
// numbers.push('Afeefah', 12)
// console.log(numbers)

// Remove the last element
numbers.pop()
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);

// Find an element
console.log(numbers.find(value => value == 9));
// Find the index of an element
console.log(numbers.findIndex( value => value == 9))
// Array Constructor
let data = new Array('Nusaibah', 'Rahmah', 19, 22)
// Array.of ()
let myArr1 = Array.of(9, 2, 4)
// Array.from
let myArr2 = Array.from(numbers)
// Array.fill()
let emoji = new Array(4).fill('🌠')

// Web-Sorting- My attempt 
// let collection1 = [2, 3, 4, 6]
// console.log(collection1.find(value => value == 3))
// console.log(collection1.find(value => value == 4))

// let collection2 = [1, 2, 3, 4, 5]
// console.log(collection2.find(value => value == 3))




// function middleElement(arr) {
// let index = Math.trunc((arr.length -1)/ 2)
// if (index % 2 == 0) {
//     console.log(arr[index]);
// }else {
//     console.log(arr[index], arr[index + 1]);
// }
// }middleElement(numbers)



// let oddNumbers = [5, 7]

// ======Combining Arrays==========

// let combArr = numbers.concat(oddNumbers)
// console.log(combArr);

// Using spread operator
// let combArr2 = [...numbers, ...oddNumbers]
// console.log(combArr2);
// console.log('Sorting numbers');

//  Sorting an array
// numbers.sort((a, b) => a-b)
// console.log(numbers)


// 
// let sortedNumbers = numbers.toSorted((c,n)=> c -n)
// console.log(sortedNumbers);

// Make use of filter == search
// console.log('filter()');
// console.log(numbers.filter(value => value ==9));

// map-allows one to modify all elements within an array 
// console.log('=')
// console.log(numbers);
// numbers[0] = 10
// console.log(numbers);

console.log('Original array');
console.log(numbers);
console.log('map()');
console.log(numbers.map(double));

function double(c) {
    return c * 2
}















