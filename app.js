// Instructions
// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.

let obj = {
  name: "Shhady",
  printName: function () {
    console.log(this.name);
  },
  printName2: function () {
    setTimeout(this.printName.bind(obj), 3000);
  },
};

obj.printName2();
