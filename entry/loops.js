/**
 * loops are classic in javaScript
 * 
 * while
 * do while
 * for
 * 
 */

let array = [1, 2, 3, 4, 5, 6];
let iterator = array.length

console.log(iterator)
console.log(array)

while(iterator--){
    array[iterator] *= 10
   console.log(`array itetator from while ${iterator}`)
}


console.log(array)
iterator = array.length
do {
    console.log(`array elemnt from do while ${array[--iterator]}`)
}while(iterator)


for(let i = 0; i < array.length; i++) {
    console.log(`array element from for loop: ${array[i]}`)
}