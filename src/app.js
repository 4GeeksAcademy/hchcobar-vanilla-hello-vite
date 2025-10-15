import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Write your code here
  // console.log("Intro to JS");
  let number = 12
  let name = ['Gustavo', 'Andrea', 'Lope', 'Fernando', 'German']
  let myArray = [1, 45, 2, 32, 22, 65]
  // console.log(myArray)
  // array: entre [] separados por comas
  // objeto entre {} claves/valor separados por comas
  let person1 = {
    name: 'Juan José',
    lastname: 'Fernández Gil',
    age: 35,
    address: {city: 'Málaga', country: 'Spain'},
    sports: ['bike', 'natación', 'futbol']
  }
  let person2 = {
    name: 'Irene',
    lastname: 'García Sánchez',
    age: 25,
    address: {city: 'Madrid', country: 'Spain'},
    sports: ['soccer', 'baloncesto']
  }
  let person3 = {
    name: 'Valentina',
    lastname: 'Díaz Gómez',
    age: 28,
    address: {city: 'Valencia', country: 'Spain'},
    sports: ['gimnasia', 'voleyball', 'patinaje']
  }

  let students = [person1, person2, person3]
  // console.log(students)
  /* 
  students.map((item) => {
    // console.log(item.name, item.lastname, item.age)
    console.log(`El estudiante ${item.name} tiene ${item.age} años`);
    
  }) 
  */

  /* 
  name.map((iterator, index) => {
    // console.log('Hola ' + iterator + ', bienvenido!')
    console.log(`Hola ${iterator}, bienvenido!`)
  })
  */
  let contenido = ''
  const tag = document.querySelector('#studentes-list')
  // tag.innerHTML = '<li class="list-group-item">Hola mundo</li><li class="list-group-item">pain</li>'
  // console.log(tag.innerHTML)
  students.map((item) => {
    contenido += `
       <li class="list-group-item d-flex justify-content-between">
         <span>${item.name} ${item.lastname}</span>
         <span>
           <i class="fas fa-user text-primary me-2"></i>
           <i class="fas fa-trash text-danger"></i>
         </span>
       </li>`
    // console.log(contenido)
  })
  tag.innerHTML = contenido

  const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
  ]
  
  let usersList = ''
  users.map((item) => {
       usersList += `
       <li class="list-group-item d-flex justify-content-between">
         <span>${item.name} ${item.email}</span>
         <span>
           <i class="fas fa-user text-primary me-2"></i>
           <i class="fas fa-trash text-danger"></i>
         </span>
       </li>`
  })

  const tagUsers = document.querySelector('#users-list')
  tagUsers.innerHTML = usersList
  console.log(users)

  let cardList = ''

  users.map((iterator) => {
    cardList += `
      <div class="card" style="width: 18rem;">
        <img src="https://randomuser.me/api/portraits/women/${iterator.id}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${iterator.name}</h5>
          <p class="card-text">${iterator.email}</p>
          <p class="card-text">${iterator.company.name}</p>
          <p class="card-text">${iterator.website}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `
  })


  const tagCards = document.querySelector('#list-card')
  tagCards.innerHTML = cardList

};
