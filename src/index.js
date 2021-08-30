import { home } from './home.js'
import { menu } from './menu.js'
console.log('webpack is working')

const content = document.querySelector('.content')


content.appendChild(home())


// const homeBtn = document.querySelector('.tab1')
// homeBtn.addEventListener('click',homeClick)


// const menuBtn = document.querySelector('.tab2')
// menuBtn.addEventListener('click',menuClick)

// function homeClick() {
//   while (content.firstChild) {
//     content.removeChild(content.lastChild);
//   }
//   content.appendChild(home())
// }


// function menuClick() {
//     while (content.firstChild) {
//         content.removeChild(content.lastChild);
//       }
//       content.appendChild(menu())


// }