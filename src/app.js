import "bootstrap";
import "./style.css";
// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";


window.onload = function() {
  // Write your code here
  let isLogged = true;

  let tag = document.querySelector('#login')
  tag.innerHTML = `
    <h4 class="text-center text-success">${isLogged ? 'Login' : 'Logout'} </h4>
  `

};
