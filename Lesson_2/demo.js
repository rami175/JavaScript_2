// function myName(firstname, lastname){
//     return firstname + " " + lastname;
// }
// const myName = function (firstname, lastname) {
//   return firstname + " " + lastname;
// };
// const myName = (firstname, lastname) => firstname + " " + lastname;
//console.log(myName("Rami", "Mahmous"));

//const myNAme = () => ;

//console.log(myName("Rami Mahmous"));

// const helloWorld = function (string) {
//   return string;
// };

// const myName = (firstname, lastname) => {
//   return `Hello my name is ${firstname} ${lastname}`;
// };

// console.log(myName("Rami", "Mahmoud"));
// console.log(helloWorld("Hello world my name is Rami."));

//Objects

// const colors = ["green", "blue", "red"];
// console.log(colors[0]);
// const bicycle = {
//   color: "blue",
//   size: "small",
//   ride() {
//     console.log("you began to padel");
//   },
// };
// console.log(bicycle.color);
// bicycle.ride();
// bicycle.color = "red";
// console.log(bicycle);

//classes

// class Cat {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   meaw() {
//     console.log("the cat meawed");
//   }
// }
// class Tabbi extends Cat {
//   constructor(name, color) {
//     super(name, color);
//   }
//   run() {
//     console.log("the cat ran");
//   }
// }
// let cat1 = new Cat("Simba", "Orange");
// let cat2 = new Cat("Daisy", "Gray");
// let tabbi1 = new Tabbi("Obi", "white");
// console.log(tabbi1.name);
// tabbi1.run();
// console.log(cat1);
// console.log(`${cat2.name} is a ${cat2.color} cat`);

//Async functions

// async function myFuncation() {
//   console.log("Hello World");
// }

// myFuncation().then(
//   function (value) {
//     // if code successful
//   },
//   function (error) {
//     // if there is an error
//   }
// );

// const myPromise = new Promise(function (res, rej) {
//   setTimeout(function () {
//     res("Keep up the good work");
//   }, 3000);
// });

// myPromise.then(function (value) {
//   console.log(value);
// });

// async function myDisplay() {
//   let myPromise = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("You are doing great!");
//     }, 5000);
//   });
//   console.log(await myPromise);
// }
// myDisplay();
