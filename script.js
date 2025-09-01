console.log("hey");

//setting value in local storage
localStorage.setItem("name", "Harshad");

//getting the local storage.
const user = localStorage.getItem("name");

//to remove the local Storage
localStorage.removeItem("name");


console.log(user);

//all the local storage will get cleared.
localStorage.clear();