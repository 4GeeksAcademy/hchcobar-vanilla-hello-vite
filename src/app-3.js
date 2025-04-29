import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    // Write your code here
    let users = [
      {
        "id": 1,
        "image_url": "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400",
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
        },
        "educations": [
          {
            "institution": "Universidad de Salamanca",
            "certification_name": "Especialización en desarrollo backend",
            "certification_date": "junio 2020"
          },
          {
            "institution": "Universidad Politécnica de Madrid",
            "certification_name": "Máster en ingeniería de software",
            "certification_date": "marzo 2018"
          },
          {
            "institution": "Universitat Pompeu Fabra",
            "certification_name": "Curso de arquitectura de software",
            "certification_date": "septiembre 2022"
          }
        ]
      },
      {
        "id": 2,
        "image_url": "https://media.istockphoto.com/...ViFY=",
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
        },
        "educations": [
          {
            "institution": "Universidad de Granada",
            "certification_name": "Curso de testing automatizado",
            "certification_date": "enero 2021"
          },
          {
            "institution": "Universidad de Sevilla",
            "certification_name": "Especialización en desarrollo frontend",
            "certification_date": "julio 2019"
          }
        ]
      },
      {
        "id": 3,
        "image_url": "https://images.pexels.com/photos/2587112/...",
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
        },
        "educations": [
          {
            "institution": "Universidad de Zaragoza",
            "certification_name": "Máster en inteligencia artificial aplicada",
            "certification_date": "diciembre 2023"
          },
          {
            "institution": "Universidad Autónoma de Barcelona",
            "certification_name": "Curso avanzado en bases de datos",
            "certification_date": "abril 2021"
          },
          {
            "institution": "Universidad de Málaga",
            "certification_name": "Diplomado en desarrollo móvil",
            "certification_date": "agosto 2022"
          },
          {
            "institution": "Universidad de Alicante",
            "certification_name": "Curso de diseño de APIs REST",
            "certification_date": "octubre 2020"
          }
        ]
      },
      {
        "id": 4,
        "image_url": "https://images.pexels.com/photos/4926674/...",
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
        },
        "educations": [
          {
            "institution": "Universidad de Oviedo",
            "certification_name": "Certificación en DevOps y CI/CD",
            "certification_date": "mayo 2022"
          },
          {
            "institution": "Universidad Complutense de Madrid",
            "certification_name": "Especialización en microservicios",
            "certification_date": "noviembre 2020"
          },
          {
            "institution": "Universidad de Cádiz",
            "certification_name": "Curso de programación con Java",
            "certification_date": "marzo 2019"
          }
        ]
      },
      {
        "id": 5,        
        "image_url": "https://images.pexels.com/photos/25756/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
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
        },
        "educations": [
          {
              "institution": "Universidad Politécnica de Madrid",
              "certification_name": "Máster en Desarrollo de Software Empresarial",
              "certification_date": "2016-09-12"
          },
          {
              "institution": "Universidad de Granada",
              "certification_name": "Certificación en Desarrollo Web con JavaScript",
              "certification_date": "2018-02-21"
          },
          {
              "institution": "Universidad de Valladolid",
              "certification_name": "Curso en Arquitectura de Microservicios",
              "certification_date": "2020-06-04"
          },
          {
              "institution": "Universidad de León",
              "certification_name": "Especialización en Desarrollo Ágil de Software",
              "certification_date": "2022-10-30"
          }
        ]
      },
      {
        "id": 6,
        "image_url": "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        },
        "educations": [
          {
              "institution": "Universidad de Oviedo",
              "certification_name": "Curso Profesional de Ingeniería de Software",
              "certification_date": "2015-03-11"
          },
          {
              "institution": "Universidad de Málaga",
              "certification_name": "Certificación en Frameworks Modernos de Desarrollo",
              "certification_date": "2017-10-05"
          },
          {
              "institution": "Universidad de Cádiz",
              "certification_name": "Especialización en Bases de Datos para Desarrolladores",
              "certification_date": "2020-01-18"
          }
        ]
      },
      {
        "id": 7,
        "image_url": "https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?b=1&s=612x612&w=0&k=20&c=aLm7LvcUVsB1sZMMzHhfktuVTXH-tOt2kGuxuM60PL0=",
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
        },
        "educations": [
          {
              "institution": "Universidad de Salamanca",
              "certification_name": "Máster en Desarrollo de Software",
              "certification_date": "2013-06-22"
          },
          {
              "institution": "Universidad de La Laguna",
              "certification_name": "Certificación en Programación Reactiva",
              "certification_date": "2016-12-10"
          },
          {
              "institution": "Universidad de Extremadura",
              "certification_name": "Especialización en Testing Automatizado",
              "certification_date": "2021-05-09"
          }
        ]
      },
      {
        "id": 8,
        "image_url": "https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?b=1&s=612x612&w=0&k=20&c=-a7kN9ndCDdQEvklOFxJbmcvWOJ9sQQ8ZxvE64AsDEE=",
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
        },
        "educations": [
          {
              "institution": "Universidad de Castilla-La Mancha",
              "certification_name": "Curso de Fundamentos de Software",
              "certification_date": "2014-07-01"
          },
          {
              "institution": "Universidad de Córdoba",
              "certification_name": "Certificación en Backend con Java",
              "certification_date": "2018-10-25"
          }
        ]
      },
      {
        "id": 9,
        "image_url": "https://media.istockphoto.com/id/1473323104/photo/handsome-mid-adult-man-dressed-in-denim-shirt-screaming-and-cheerfully-pumping-fist-while.jpg?b=1&s=612x612&w=0&k=20&c=KLlyLJBCdzKEI5TE2zsSut6oxJFg5Jxow9Y1ohE-dL4=",
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
        },
        "educations": [
          {
              "institution": "Universidad de Alcalá",
              "certification_name": "Especialización en Desarrollo con .NET",
              "certification_date": "2017-03-14"
          },
          {
              "institution": "Universidad de Huelva",
              "certification_name": "Curso Avanzado de Frontend con Vue.js",
              "certification_date": "2020-07-30"
          },
          {
              "institution": "Universidad de Jaén",
              "certification_name": "Máster en Ingeniería de Software Avanzada",
              "certification_date": "2022-01-05"
          }
        ]
      },
      {
        "id": 10,
        "image_url": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
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
        },
        "educations": [
          {
              "institution": "Universidad Internacional de La Rioja",
              "certification_name": "Certificación en Desarrollo de Aplicaciones Móviles",
              "certification_date": "2016-08-14"
          },
          {
              "institution": "Universidad Abierta de Cataluña",
              "certification_name": "Curso Intensivo de Seguridad en Aplicaciones Web",
              "certification_date": "2019-05-20"
          }
        ]
      }
    ]
    console.log(users)

    let tagContent = ``

    /* Mapear el array y agregar contenido */
    users.map((item) => {
      tagContent += `
          <div key=${item.id} class="card">
            <img src=${item.image_url} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">
               Compay: ${item.company.name} </br> Email: ${item.email} </br> Website: ${item.website}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              ${item.educations.map((diploma) => `
                      <li class="list-group-item d-flex justify-content-between bg-info">
                        <span>${diploma.certification_name}</span>
                        <span>${diploma.institution}</span>
                        <span>${diploma.certification_date}</span>
                      </li>
                      `
                ).join("")
              }
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
      `
      // console.log(tagContent)
    })


    /* Capturar el elemento HTML */
    const tag = document.querySelector('#list-card');
    tag.innerHTML = tagContent;
    // console.log(tag)

    /* Ejemplo de mapeo anidado */
    let dadoUno = [1, 2, 3]
    let dadoDos = [1, 2, 3]
    let dadoTres = [1, 2, 3]

    dadoUno.map((number, index) => {
      dadoDos.map((item) => {
        dadoTres.map((iterator) => {
          // console.log('D1: ', number, 'D2:', item, 'D3:', iterator)
        })
      })
    })
 
};
