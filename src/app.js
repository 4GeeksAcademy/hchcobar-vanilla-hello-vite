import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    // Write your code here
  let todos = [
    {
      "name": "Jhon",
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "name": "Ringo",
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "name": "George",
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "name": "George",
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "name": "Jhon",
      "id": 5,
      "title": "laboriosam mollitia et enim quasi",
      "completed": false
    },
    {
      "name": "Paul",
      "id": 6,
      "title": "qui ullam ratione quibusdam",
      "completed": false
    },
    {
      "name": "Ringo",
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "name": "Paul",
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "name": "Jhon",
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "name": "George",
      "id": 10,
      "title": "illo est ratione doloremque quia",
      "completed": true
    }
  ]

  console.log(todos)

  let textHTML = ''
  /* Mapear el array todos */
  todos.map((todo) => {
    textHTML += `
      <li class="list-group-item d-flex justify-content-between">
        <span>${todo.title}</span>
        <span>${todo.name}</span>
        <span>
          ${todo.completed ? 
            `<i class="fas fa-check-square fa-lg text-success"></i>`
          : 
            `<i class="fas fa-window-close fa-lg text-danger"></i>`
          }
        </span>
      </li>
    `
  })

  /* Capturar la ul desde el HTML */
  let tag = document.querySelector('#todos')
  
  /* Voy a renderizar las li a la ul */
  tag.innerHTML = textHTML


};
