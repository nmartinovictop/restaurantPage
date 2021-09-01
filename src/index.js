import { home } from './home.js'
import { menu } from './menu.js'
import { contact } from './contact.js'
console.log('webpack is working')

const content = document.querySelector('.content')


// content.appendChild(home())

// function homeClick() {
//     while (content.firstChild) {
//       content.removeChild(content.lastChild);
//     }
//     content.appendChild(home())
//     assignEventListeners()
//   }


let homeBtn = document.querySelector('.tab1')
let menuBtn = document.querySelector('.tab2')
let contactBtn = document.querySelector('.tab3')

// menuBtn.addEventListener('click',menuClick)

function menuClick() {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
    content.appendChild(menu())
    homeBtn = document.querySelector('.tab1')
    homeBtn.addEventListener('click',homeClick)
    contactBtn = document.querySelector('.tab3')
    contactBtn.addEventListener('click',contactClick)
}

function homeClick() {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
    content.appendChild(home())
    menuBtn = document.querySelector('.tab2')
    menuBtn.addEventListener('click',menuClick)
    contactBtn = document.querySelector('.tab3')
    contactBtn.addEventListener('click',contactClick)
}

function contactClick() {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
    content.appendChild(contact())
    menuBtn = document.querySelector('.tab2')
    menuBtn.addEventListener('click',menuClick)
    homeBtn = document.querySelector('.tab1')
    homeBtn.addEventListener('click',homeClick)
}

homeClick()