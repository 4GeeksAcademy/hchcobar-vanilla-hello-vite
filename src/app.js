import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Write your code here
  // console.log('Hola Spain 108');
  // console.log("Hello Rigo from the console!");

  // let, var const
  let name = 'Aia';  // string
  let lastname = "Gómez"  // string
  let saludo = "I'am"
  let number = 10;   // integer
  let saldo = 255.50 // float
  let isActive = true  // boolean

  // Array

  // Objetos
    let person1 = {
      name: 'Alberto',
      lastname: 'Fernández',
      age: 35,
      address: {city: 'Madrid',country: 'Spain'},
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
    
    // Array de objetos (json)
    let students = [person1, person2, person3]

    console.log(students)
    console.log(students[0].lastname)
    console.log(students[2].sports[1])

  
};
