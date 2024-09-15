// **************************************************** HOW TO CREATE AN OBJECT *****************************************

// const Me = {
//     name: "Gyanvendr singh",
//     age: "19",
//     email: "gyanvendras2004@gmail.com",
//     location: "Kanpur",
//     education: ["10th",'12th','b.tech']
// }

// ********************************************to excess a data from object***********************8

// console.log(Me.email); // This is not so good method to excess a data 
// console.log(Me["email"]); // This method is best to excess a data from object

//  *******************************how to create, add and excess a symbol in object************************

// const mysym = Symbol("key1")

// const Me = {
//     name: "Gyanvendr singh",
//     [mysym]: "mykey1",                             // to insert a symbol we use [] bracket
//     age: "19",
//     email: "gyanvendras2004@gmail.com",
//     location: "Kanpur",
//     education: ["10th",'12th','b.tech']
// }

// console.log(Me[mysym]); // this is the way to excess the symbol from object
// console.log(typeof mysym); // to know the type
// console.log(Me)



// ******************************singleton/constructor method to declare object *********************************

// const appUser = new Object()
// appUser.id ="123bd"
// appUser.name = "gyani"
// appUser.isloggedIn = false
// console.log(appUser);


// *******************************some properties*****************************

// const user = {
//     email:"gyanvendras2004@gmail.com",
//     fullName:{
//         firstNmae: "Gyanvendra",
//         secondName: "Singh"
//     },
//     age:19,
//     location:"kanpur"
// }
// console.log(user)
// console.log(user.fullName);


// const obj1={
//     name_1:"gyani",
//     age_1:19,
//     location_1:"kanpur"
// }

// const obj2={
//     name_2:"anuj",
//     age_2:19,
//     location_2:"agra"
// }

// const obj3 = Object.assign({},obj1,obj2)  // to combine one or more object
// const obj3 = {...obj1, ...obj2}  // this is also to combine one or more object and it is better method 
// console.log(obj3)

//  console.log(Object.keys(obj1));
//  console.log(Object.values(obj1));
//  console.log(obj1.hasOwnProperty("age_1"));


// const course = {
//       coursename: "js in hindi",
//       price: "999",
//       courseInstructor:"Hitesh"
// }
// // console.log(course.courseInstructor);

// // ******************************************Destructuring*****************************


// const {courseInstructor:instructor}= course
// console.log(instructor)



function my(){
    
      const obj1 = { name:"gyanvendra singh",
      age:"19",
      location:"Agra"}
      
    console.log(obj1);

    // console.log("g");
    // console.log("y");
    // console.log("a");
    // console.log("n");
    // console.log("i");
}

my()










