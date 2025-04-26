import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    // Write your code here

    // Array
    let names = ['Giovanny', 'Raúl', 'Arturo', 'Fernando', 'Federico']

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

    // console.log(students)

    /* Mapamos un array */
    // names.map((element, i) => {console.log(i, element)})
    // array.map(función flecha)
    // students.map((item, i) => {console.log(i, item.name, item.age, item.sports[0])})
    // students.map((item, i) => {console.log(item.name + ' tiene' + item.age + ' años')})
    // students.map((item, i) => {console.log(`${item.name} tiene ${item.age} años`)})

    /* Crear el contenido a renderizar */
    let tagContent = ''
    students.map((item, index) => {
      console.log('hola');
      tagContent += `<li class="list-group-item">${item.name}</li>`
    })
    console.log(tagContent)

    /* Capturar un elemeto HTML */
    const tag = document.querySelector('ul')
    tag.innerHTML = tagContent;
    console.log(tag)
  
};
