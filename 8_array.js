// [ARRAY]

// **********************************************first way to define an array******************************

const  marks = [95,30,56,78]
const  grade = ['A+','A','A++','b']
const  name  = ['gyani', 'anuj', 'gyanvendra', 'abc']

console.table([marks,grade,name])

//**********************************************second way to define an array*****************************

const array2 = new Array(40,'gyani','A++')
console.log(array2)

const godA = ['durga mata','mahakla','ram','hanuman']
const godB = ['shayam','krisna','narayan','shiv']
 
godA.push(godB)  // by this the  godB will combine in array godA but as another array

console.log(godA)

// *************************************WE USE CONCAT TO HAVE A NEW ARRAY OF COMBINATION OF BOTH*******************

const AllGod = godA.concat(godB)

console.log(AllGod)

//********************************************** */ ANOTHER WAY IS SPREAD***********************************

const allGod = [...godA, ...godB]
console.log(allGod)

// ********************************************** IF THERE IS SO MUCH ARRAY IN  AN ARRAY THEN HOW TO SPLIT IT *******************************

const new_array = [1,2,3,[4,5,6,7],8,9,[10,11,12,13],14,15,16,[17,18,19,20],21,22,23,24]
const real_array = new_array.flat(Infinity)
console.log(real_array)

// ***************************************HOW TO CREATE AN ARRAY BY USING A STRING OR AN INTEGERS*********************************

const str1 = "my name is gyanvendra singh"

console.log(Array.from(str1));