import "bootstrap";
import "./style.css";
// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";


window.onload = function () {
  /* Renderizado condicional, Ejemplo básico */
  let isLogged = true;
  let tag = document.querySelector('#login')
  tag.innerHTML = `
    <h4 class="text-center text-success">${isLogged ? 'Estoy Logeado' : 'Tengo que logearme'} </h4>
  `


  /* Renderizamos el dashboard si está logeado o el formulario login si está deslogeado */

  let tagMain = document.querySelector('#dashboard')
  tagMain.innerHTML = `
    ${isLogged ? 
      `
        <main> 
          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center"> 
            <div class="col"> <div class="card mb-4 rounded-3 shadow-sm"> <div class="card-header py-3"> <h4 class="my-0 fw-normal">Free</h4> </div> <div class="card-body"> <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1> <ul class="list-unstyled mt-3 mb-4"> <li>10 users included</li> <li>2 GB of storage</li> <li>Email support</li> <li>Help center access</li> </ul> <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button> </div> </div> </div> <div class="col"> <div class="card mb-4 rounded-3 shadow-sm"> <div class="card-header py-3"> <h4 class="my-0 fw-normal">Pro</h4> </div> <div class="card-body"> <h1 class="card-title pricing-card-title">$15<small class="text-body-secondary fw-light">/mo</small></h1> <ul class="list-unstyled mt-3 mb-4"> <li>20 users included</li> <li>10 GB of storage</li> <li>Priority email support</li> <li>Help center access</li> </ul> <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button> </div> </div> </div> <div class="col"> <div class="card mb-4 rounded-3 shadow-sm border-primary"> <div class="card-header py-3 text-bg-primary border-primary"> <h4 class="my-0 fw-normal">Enterprise</h4> </div> <div class="card-body"> <h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1> <ul class="list-unstyled mt-3 mb-4"> <li>30 users included</li> <li>15 GB of storage</li> <li>Phone and email support</li> <li>Help center access</li> </ul> <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button> </div> </div> </div> </div> <h2 class="display-6 text-center mb-4">Compare plans</h2> <div class="table-responsive"> 
            <table class="table text-center"> <thead> <tr> <th style="width: 34%;"></th> <th style="width: 22%;">Free</th> <th style="width: 22%;">Pro</th> <th style="width: 22%;">Enterprise</th> </tr> </thead> <tbody> <tr> <th scope="row" class="text-start">Public</th> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> </tr> <tr> <th scope="row" class="text-start">Private</th> <td></td> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> </tr> </tbody> <tbody> <tr> <th scope="row" class="text-start">Permissions</th> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> </tr> <tr> <th scope="row" class="text-start">Sharing</th> <td></td> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> </tr> <tr>           <th scope="row" class="text-start">Unlimited members</th> <td></td> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> </tr> <tr> <th scope="row" class="text-start">Extra security</th> <td></td> <td></td> <td><svg class="bi" width="24" height="24" role="img" aria-label="Included"><use xlink:href="#check"></use></svg></td> </tr> </tbody> 
            </table> 
          </div> 
        </main>
      `
      : 
      `
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      `
    }
  `


  /* Renderizado condicional, Ejemplo de listas */
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

  // declaro una variable donde voy a acumular lo q quiero mostrar
  let textTodos = '<ul class="list-group">'
  // mapeo mi array
  todos.map((todo) => {
    textTodos += `
      <li key=${todo.id} class="list-group-item d-flex justify-content-between">
        <span>
        ${todo.id} - ${todo.title}
        </span>
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
  textTodos += "</ul>"
  // lo envío al innerHTML
  let tagTodos = document.querySelector('#todos')
  tagTodos.innerHTML = textTodos

};
