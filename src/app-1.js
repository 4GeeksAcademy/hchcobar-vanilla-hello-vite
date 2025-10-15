import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Write your code here
  // console.log("Intro to JS");
  let number = 12
  let myArray = [10, 20, 30, 'hola', false, 'mundo', 15.4] 
  // console.log(myArray)
  // array: entre [] separados por comas
  // objeto entre {} claves/valor separados por comas
  let person1 = {
    name: 'Alberto',
    lastname: 'Fernández',
    age: 35,
    address: {city: 'Madrid', country: 'Spain'},
    sports: ['bike', 'natación', 'futbol']
  }
  let person2 = {
    name: 'Aia',
    lastname: 'Buro',
    age: 25,
    address: {city: 'Madrid', country: 'France'},
    sports: ['soccer', 'baloncesto']
  }
  let person3 = {
    name: 'Valentina',
    lastname: 'Gil',
    age: 28,
    address: {city: 'Valencia', country: 'Colombia'},
    sports: ['gimnasia', 'voleyball', 'patinaje']
  }

  let students = [person1, person2, person3]
  console.log(students[0].sports[2])

  
};
