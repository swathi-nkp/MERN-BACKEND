// 1.Pop & Push

const cart = []; // empty array

const Add = cart.push("apple","orange","mango");//Add items

console.log(Add); // No.of items add
console.log(cart); //Added items
const removedItem = cart.pop(); // remove last item

console.log(cart);// remaining items
console.log(removedItem); // removed item

// 2.shift & unshift

const num = [10,20,30,40]
const removedNum = num.shift(); // remove first item
console.log(num); // remaining items
console.log(removedNum); // removed item
const addNum = num.unshift(5); // Add 
console.log(num);  // added item
console.log(addNum);// total index

// 3.inculdes()

const skills = ["java","python","react","node.js"]

const check = skills.includes("react",2)

console.log(check);

// 4.Slice()

const number = [1,2,3,4,5]

const cutElement = number.slice(1,4); // cut the middle value

console.log(cutElement); // cutted value

// 5.splice

const Num = [1,2,3,4,5]

console.log(Num); // original not affected

const cutAdd = Num.splice(2,2,100,200)

console.log(cutAdd); // cutted items

console.log(Num); // replace

// 6.Concat

const a = [1,2]
const b = [3,4]
const merge = a.concat(b);
console.log(merge);

// 7.Join()

const seperate = ["JS", "React", "Node"];
const result = seperate.join("-")
console.log(result);

// 8.sort

const value = [3057,2,505,6,404,505]

const ass = value.sort((a,b)=>a-b);
console.log(ass); // ascending order

const desc = value.sort((a,b)=>b-a);
console.log(desc);

// 9.Reverse

const input = [1,2,3,4,5,6]

console.log(input); // original value

const opp = input.reverse()

console.log(opp); // reverse

// 10.Idex 

const id = [3,4,5,7,2,5,8]

const final = id.indexOf(6,0)!==-1 ? "find" : "not found";

console.log(final);















