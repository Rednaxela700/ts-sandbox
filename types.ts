let myString: string;
let myNum: number;
let myBool: boolean

//this has to be an array of strings
// let strArray: string[]
// let numArr: number[]
// let boolArr: boolean[]

let strArray: Array<string>
let numArr: Array<number>
let boolArr: Array<boolean>

// tuple - array with defined number of elements
let strNumTuple: [string, number]

myNum = 22.555;
myString = 'hello';
myBool = false;
strArray = ['hello', 'stranger']
numArr = [1,2,3]
boolArr [true, true, false]

strNumTuple = ['Hello', 1000]

// another way to declare typed primitive
let myVoid: void = null
myVoid = undefined
let myNull: null = null
let myUndefined: undefined = undefined

console.log(myBool)