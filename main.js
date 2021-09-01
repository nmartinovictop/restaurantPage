/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });

function contact() {


//<div class='outer-box'>
    const outerBox = document.createElement('div')
    outerBox.classList.add('outer-box')
            // <div class='main-box'>
    const mainBox = document.createElement('div')
    mainBox.classList.add('main-box')
    outerBox.appendChild(mainBox)
                // <div class='nav-box'>
    const navBox = document.createElement('nav-box')
    navBox.classList.add('nav-box')
    mainBox.appendChild(navBox)
    const tab1 = document.createElement('div')
    tab1.classList.add('tab1','tab')
    tab1.innerText = 'Home'
    navBox.appendChild(tab1)
//                     <div class='tab2 tab'>Menu</div>
    const tab2 = document.createElement('div')
    tab2.classList.add('tab2','tab')
    tab2.innerText = 'Menu'
    navBox.appendChild(tab2)
//                     <div class='tab3 tab'>Contact</div>
    const tab3 = document.createElement('div')
    tab3.classList.add('tab3','tab')
    tab3.innerText = 'Contact'
    navBox.appendChild(tab3)
        //         </div>
        //         <div class='content-box-contact'>
    const contentBoxContact = document.createElement('div')
    contentBoxContact.classList.add('content-box-contact')
    mainBox.appendChild(contentBoxContact)
        //             <h1>Contact Us</h1>
    const contactUs = document.createElement('h1')
    contactUs.innerText = 'Contact Us'
    contentBoxContact.appendChild(contactUs)
        //             <form>
    const form = document.createElement('form')
    contentBoxContact.appendChild(form)
        //                 <div>
    const div1 = document.createElement('div')
    form.appendChild(div1)
        //                     <label for="name">Name: </label>
    const labelName = document.createElement('label')
    labelName.htmlFor = 'name'
    labelName.innerText = 'Name: '
    div1.append(labelName)
        //                     <textarea name="name" id="name" cols="30" rows="1"></textarea>
    const textAreaName = document.createElement('textarea')
    textAreaName.setAttribute("name","name")
    textAreaName.setAttribute("id","name")
    textAreaName.setAttribute("cols","30")
    textAreaName.setAttribute("rows","1")
    div1.appendChild(textAreaName)
        //                 </div>
        //                 <div>
    const div2 = document.createElement('div')
    form.appendChild(div2)
        //                     <label for="email">Email: </label>
    const labelEmail = document.createElement('label')
    labelEmail.htmlFor = 'email'
    labelEmail.innerText = 'Email: '
    div2.appendChild(labelEmail)
        //                     <textarea name="name" id="name" cols="30" rows="1"></textarea>
    const textAreaEmail = document.createElement('textarea')
    textAreaEmail.setAttribute("name","email")
    textAreaEmail.setAttribute("id","email")
    textAreaEmail.setAttribute("cols","30")
    textAreaEmail.setAttribute("rows","1")
    div2.append(textAreaEmail)
        //                     <textarea name="email" id="email" cols="30" rows="1"></textarea>
        //                 </div>
        //                 <div>
    const div3 = document.createElement('div')
    form.appendChild(div3)
        //                     <label for="message">Message: </label>
    const labelMessage = document.createElement('label')
    labelMessage.htmlFor = 'message'
    labelMessage.innerText = 'Message: '
    div3.appendChild(labelMessage)
        //                     <textarea name="message" id="message" cols="30" rows="10"></textarea>
    const textAreaMessage = document.createElement('textarea')
    textAreaMessage.setAttribute("name","message")
    textAreaMessage.setAttribute("id","message")
    textAreaMessage.setAttribute("cols","30")
    textAreaMessage.setAttribute("rows","10")
    div3.appendChild(textAreaMessage)
        //                 </div>
        //                 <div class='button'>

        const btnDiv = document.createElement('div')
        btnDiv.classList.add('button')
        const btn = document.createElement('button')
        btn.type = 'submit'
        btn.innerText = 'Submit'
    // const btnTextArea = document.createElement('textarea')

        form.appendChild(btnDiv)
        btnDiv.appendChild(btn)
        //                     <button type="submit">Submit</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>



    

    return outerBox
}

 

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _src_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/logo.png */ "./src/assets/logo.png");


function home() {

    //get content div
    const content = document.querySelector('.content')

    // create all elements to add
    const outerBox = document.createElement('div')
    const mainBox = document.createElement('div')
    const navBox = document.createElement('div')
    const tab1 = document.createElement('div')
    const tab2 = document.createElement('div')
    const tab3 = document.createElement('div')
    const contentBox = document.createElement('div')
    const title = document.createElement('div')
    const courseName = document.createElement('h1')
    const subContent = document.createElement('div')
    const leftContentDiv = document.createElement('div')
    const logoImg = document.createElement('img')
    const rightContentDiv = document.createElement('div')
    const titleText = document.createElement('h2')
    const copyText = document.createElement('p')

    // add classlists
    outerBox.classList.add('outer-box')
    mainBox.classList.add('main-box')
    navBox.classList.add('nav-box')
    tab1.classList.add('tab1','tab')
    tab2.classList.add('tab2','tab')
    tab3.classList.add('tab3','tab')
    contentBox.classList.add('content-box')
    title.classList.add('title')
    courseName.classList.add('course-name')
    subContent.classList.add('sub-content')
    leftContentDiv.classList.add('left-content-div')
    logoImg.classList.add('logo-img')
    rightContentDiv.classList.add('right-content-div')
    titleText.classList.add('title-text')
    copyText.classList.add('copy-text')

    //append items
    // content.appendChild(outerBox);
    outerBox.appendChild(mainBox)
    mainBox.append(navBox,contentBox)
    navBox.append(tab1,tab2,tab3)
    contentBox.append(title)
    title.append(courseName)
    contentBox.append(subContent)
    subContent.append(leftContentDiv)
    leftContentDiv.append(logoImg)
    subContent.append(rightContentDiv)
    rightContentDiv.append(titleText)
    rightContentDiv.append(copyText)


    //add text
    tab1.innerHTML = 'Home'
    tab2.innerHTML = 'Menu'
    tab3.innerHTML = 'Contact'
    courseName.innerHTML = 'The Royal Course'
    titleText.innerHTML = 'About'
    copyText.innerHTML = `The Royal Course was created in 2001. It was designed to be a world class golf experience
    and michellin-stared restaurant. Created by world renowned architect Rex Gable, and
    managed by industry leader Allan Goodbar, the Royal Club is sure to meet your
    expectations.`

    //add image
    logoImg.src = _src_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__
    
    return outerBox
}




/* <div class='outer-box'>
            <div class='main-box'>
                <div class='nav-box'>
                    <div class='tab1 tab'>Home</div>
                    <div class='tab2 tab'>Menu</div>
                    <div class='tab3 tab'>Contact</div>
                </div>
                <div class='content-box'>
                    <div class='title'>
                        <h1 class='course-name'>The Royal Course</h1>
                    </div>
                    <div class='sub-content'>
                        <div class='left-content-div'>
                            <img src="../src/assets/logo.png" alt="" class='logo-img'>
                        </div>
                        <div class='right-content-div'>
                            <h2 class='title-text'>About</h2>
                            <p class='copy-text>The Royal Course was created in 2001. It was designed to be a world class golf experience
                                and michellin-stared restaurant. Created by world renowned architect Rex Gable, and
                                managed by industry leader Allan Goodbar, the Royal Club is sure to meet your
                                expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _assets_beer_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/beer.jpg */ "./src/assets/beer.jpg");
/* harmony import */ var _assets_hamburger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/hamburger.jpg */ "./src/assets/hamburger.jpg");
/* harmony import */ var _assets_caesar_salad_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/caesar_salad.jpg */ "./src/assets/caesar_salad.jpg");
/* harmony import */ var _assets_lemonade_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/lemonade.jpg */ "./src/assets/lemonade.jpg");
/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/pizza.jpg */ "./src/assets/pizza.jpg");
/* harmony import */ var _assets_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/sandwich.jpg */ "./src/assets/sandwich.jpg");








function menu() {

    //create all elements to add
    


// <div class='outer-box'>
    const outerBox = document.createElement('div')
    outerBox.classList.add('outer-box')
//             <div class='main-box'>
    const mainBox = document.createElement('div')
    mainBox.classList.add('main-box')
    outerBox.appendChild(mainBox)
//                 <div class='nav-box'>
    const navBox = document.createElement('div')
    navBox.classList.add('nav-box')
    mainBox.appendChild(navBox)
//                     <div class='tab1 tab'>Home</div>
    const tab1 = document.createElement('div')
    tab1.classList.add('tab1','tab')
    tab1.innerText = 'Home'
    navBox.appendChild(tab1)
//                     <div class='tab2 tab'>Menu</div>
    const tab2 = document.createElement('div')
    tab2.classList.add('tab2','tab')
    tab2.innerText = 'Menu'
    navBox.appendChild(tab2)
//                     <div class='tab3 tab'>Contact</div>
    const tab3 = document.createElement('div')
    tab3.classList.add('tab3','tab')
    tab3.innerText = 'Contact'
    navBox.appendChild(tab3)
//                 </div>
//                 <div class='content-box-menu'>
    const contentBoxMenu = document.createElement('div')
    contentBoxMenu.classList.add('content-box-menu')
    mainBox.appendChild(contentBoxMenu)

//                     <div class='menu-intro'>The menu at the Royal club was created by Michellin awarded chef Allen
//                         Goodbar. The food is all grown organically on site, and we use regenerative farming techniques
//                         to ensure environmental stability.
//                     </div>
    const menuIntro = document.createElement('div')
    menuIntro.classList.add('menu-intro')
    menuIntro.innerText = `The menu at the Royal club was created by Michellin awarded chef Allen
                             Goodbar. The food is all grown organically on site, and we use regenerative farming techniques
                            to ensure environmental stability.`
    contentBoxMenu.appendChild(menuIntro)
//                     <div class='food-items'>
    const foodItems = document.createElement('div')
    foodItems.classList.add('food-items')
    contentBoxMenu.appendChild(foodItems)
//                         <div class='menu-row row1'>
    const menuRow1 = document.createElement('div')
    menuRow1.classList.add('menu-row', 'row1')
    foodItems.appendChild(menuRow1)
//                             <div class='item1 item'>
    const item1 = document.createElement('div')
    item1.classList.add('item1','item')
    menuRow1.appendChild(item1)
//                                 <img src="../src/assets/hamburger.jpg" alt="">
    const hamburgerPic = new Image()
    hamburgerPic.src = _assets_hamburger_jpg__WEBPACK_IMPORTED_MODULE_1__
    item1.appendChild(hamburgerPic)

//                                 <p>This hamburger is completely farm to table, and rivals Wagyu beef in it's taste.
//                                     Served
//                                     with Fries.<br>$10</p>
    const hamburgerText = document.createElement('p')
    hamburgerText.innerHTML = `This hamburger is completely farm to table, and rivals Wagyu beef in it's taste.
                                         Served
                                         with Fries.<br>$10`
    item1.appendChild(hamburgerText)
//                             </div>
//                             <div class='item2 item'>
    const item2 = document.createElement('div')
    item2.classList.add('item2','item')
    menuRow1.appendChild(item2)
//                                 <img src="../src/assets/caesar_salad.jpg" alt="">
    const saladImg = new Image()
    saladImg.src = _assets_caesar_salad_jpg__WEBPACK_IMPORTED_MODULE_2__
    item2.appendChild(saladImg)

//                                 <p>This salad is among the best in the world. Fresh caesar salad with a creamy house
//                                     made
//                                     dressing and incredible grilled chicken<br>$10</p>
    const saladText = document.createElement('p')
    saladText.innerHTML = `This salad is among the best in the world. Fresh caesar salad with a creamy house
                                         made
                                         dressing and incredible grilled chicken<br>$10`
    item2.appendChild(saladText)
//                             </div>
//                         </div>
//                         <div class='menu-row row2'>
    const menuRow2 = document.createElement('div')
    menuRow2.classList.add('menu-row','row2')
    foodItems.appendChild(menuRow2)
//                             <div class='item3 item'>
    const item3 = document.createElement('div')
    item3.classList.add('item3','item')
    menuRow2.appendChild(item3)
//                                 <img src="../src/assets/sandwich.jpg" alt="">
    const sandwichImg = new Image()
    sandwichImg.src = _assets_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5__
    item3.appendChild(sandwichImg)
//                                 <p>The best club sandwich in the country. Period.
//                                     Served
//                                     with Fries.<br>$10</p>
    const sandwichText = document.createElement('p')
    sandwichText.innerText = `The best club sandwich in the country. Period.
                                         Served
                                         with Fries.<br>$10`
//                             </div>
    item3.appendChild(sandwichText)
//                             <div class='item4 item'>
    const item4 = document.createElement('div')
    item4.classList.add('item4','item')
    menuRow2.appendChild(item4)
//                                 <img src="../src/assets/pizza.jpg" alt="">
    const pizzaImg = document.createElement('img')
    pizzaImg.src = _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__
    item4.append(pizzaImg)
//                                 <p>This hamburger is completely farm to table, and rivals Wagyu beef in it's taste.
//                                     Served
//                                     with Fries.<br>$10</p>
    const pizzaText = document.createElement('p')
    pizzaText.innerText = `This hamburger is completely farm to table, and rivals Wagyu beef in it's taste.
                                         Served
                                         with Fries.<br>$10`
//                             </div>
    item4.appendChild(pizzaText)
//                         </div>
//                         <div class='menu-row row3'>
    const menuRow3 = document.createElement('div')
    menuRow3.classList.add('menu-row','row3')
    foodItems.appendChild(menuRow3)
//                             <div class='item5 item'>
    const item5 = document.createElement('div')
    item5.classList.add('item5','item')
    menuRow3.appendChild(item5)
//                                 <img src="../src/assets/lemonade.jpg" alt="">
    const lemonadeImg = document.createElement('img')
    lemonadeImg.src = _assets_lemonade_jpg__WEBPACK_IMPORTED_MODULE_3__
    item5.appendChild(lemonadeImg)
//                                 <p>Delicious lemonade made on site<br>$2</p>
    const lemonadeText = document.createElement('p')
    lemonadeText.innerHTML = `Delicious lemonade made on site<br>$2`
    item5.appendChild(lemonadeText)
//                             </div>
//                             <div class='item6 item'>
    const item6 = document.createElement('div')
    item6.classList.add('item6','item')
    menuRow3.appendChild(item6)
//                                 <img src="../src/assets/beer.jpg" alt="">
    const beerImg = new Image()
    beerImg.src = _assets_beer_jpg__WEBPACK_IMPORTED_MODULE_0__
    item6.appendChild(beerImg)
//                                 <p>Hard to beat a cold beer on a warm day!<br>$5</p>
    const beerText = document.createElement('p')
    beerText.innerHTML = `Hard to beat a cold beer on a warm day!<br>$5`
    item6.appendChild(beerText)
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>

    return outerBox
}



/***/ }),

/***/ "./src/assets/beer.jpg":
/*!*****************************!*\
  !*** ./src/assets/beer.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ab544a666b3e36338ae.jpg";

/***/ }),

/***/ "./src/assets/caesar_salad.jpg":
/*!*************************************!*\
  !*** ./src/assets/caesar_salad.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c277f19dcbba0a20e38.jpg";

/***/ }),

/***/ "./src/assets/hamburger.jpg":
/*!**********************************!*\
  !*** ./src/assets/hamburger.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "957caa85e2ae3d17fee7.jpg";

/***/ }),

/***/ "./src/assets/lemonade.jpg":
/*!*********************************!*\
  !*** ./src/assets/lemonade.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8e3547ab2b36572af88.jpg";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e87665e6b1f33c3129db.png";

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c066971ce4367c6e0bc.jpg";

/***/ }),

/***/ "./src/assets/sandwich.jpg":
/*!*********************************!*\
  !*** ./src/assets/sandwich.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29d3bf623de4986d53c8.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");



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
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)())
    homeBtn = document.querySelector('.tab1')
    homeBtn.addEventListener('click',homeClick)
    contactBtn = document.querySelector('.tab3')
    contactBtn.addEventListener('click',contactClick)
}

function homeClick() {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)())
    menuBtn = document.querySelector('.tab2')
    menuBtn.addEventListener('click',menuClick)
    contactBtn = document.querySelector('.tab3')
    contactBtn.addEventListener('click',contactClick)
}

function contactClick() {
    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)())
    menuBtn = document.querySelector('.tab2')
    menuBtn.addEventListener('click',menuClick)
    homeBtn = document.querySelector('.tab1')
    homeBtn.addEventListener('click',homeClick)
}

homeClick()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7OztBQ25IdUI7O0FBRXpDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGlEQUFJO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFZTs7O0FBR2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR29DO0FBQ1U7QUFDSztBQUNQO0FBQ047QUFDTTs7O0FBRzVDOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrREFBUztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQVc7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZmdDO0FBQ0E7QUFDTTtBQUN0Qzs7OztBQUlBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOENBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBjb250YWN0KCkge1xuXG5cbi8vPGRpdiBjbGFzcz0nb3V0ZXItYm94Jz5cbiAgICBjb25zdCBvdXRlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb3V0ZXJCb3guY2xhc3NMaXN0LmFkZCgnb3V0ZXItYm94JylcbiAgICAgICAgICAgIC8vIDxkaXYgY2xhc3M9J21haW4tYm94Jz5cbiAgICBjb25zdCBtYWluQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluQm94LmNsYXNzTGlzdC5hZGQoJ21haW4tYm94JylcbiAgICBvdXRlckJveC5hcHBlbmRDaGlsZChtYWluQm94KVxuICAgICAgICAgICAgICAgIC8vIDxkaXYgY2xhc3M9J25hdi1ib3gnPlxuICAgIGNvbnN0IG5hdkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdi1ib3gnKVxuICAgIG5hdkJveC5jbGFzc0xpc3QuYWRkKCduYXYtYm94JylcbiAgICBtYWluQm94LmFwcGVuZENoaWxkKG5hdkJveClcbiAgICBjb25zdCB0YWIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWIxLmNsYXNzTGlzdC5hZGQoJ3RhYjEnLCd0YWInKVxuICAgIHRhYjEuaW5uZXJUZXh0ID0gJ0hvbWUnXG4gICAgbmF2Qm94LmFwcGVuZENoaWxkKHRhYjEpXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RhYjIgdGFiJz5NZW51PC9kaXY+XG4gICAgY29uc3QgdGFiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiMi5jbGFzc0xpc3QuYWRkKCd0YWIyJywndGFiJylcbiAgICB0YWIyLmlubmVyVGV4dCA9ICdNZW51J1xuICAgIG5hdkJveC5hcHBlbmRDaGlsZCh0YWIyKVxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0YWIzIHRhYic+Q29udGFjdDwvZGl2PlxuICAgIGNvbnN0IHRhYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYjMuY2xhc3NMaXN0LmFkZCgndGFiMycsJ3RhYicpXG4gICAgdGFiMy5pbm5lclRleHQgPSAnQ29udGFjdCdcbiAgICBuYXZCb3guYXBwZW5kQ2hpbGQodGFiMylcbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPSdjb250ZW50LWJveC1jb250YWN0Jz5cbiAgICBjb25zdCBjb250ZW50Qm94Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudEJveENvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGVudC1ib3gtY29udGFjdCcpXG4gICAgbWFpbkJveC5hcHBlbmRDaGlsZChjb250ZW50Qm94Q29udGFjdClcbiAgICAgICAgLy8gICAgICAgICAgICAgPGgxPkNvbnRhY3QgVXM8L2gxPlxuICAgIGNvbnN0IGNvbnRhY3RVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBjb250YWN0VXMuaW5uZXJUZXh0ID0gJ0NvbnRhY3QgVXMnXG4gICAgY29udGVudEJveENvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFVzKVxuICAgICAgICAvLyAgICAgICAgICAgICA8Zm9ybT5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgY29udGVudEJveENvbnRhY3QuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXYxKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTogPC9sYWJlbD5cbiAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxOYW1lLmh0bWxGb3IgPSAnbmFtZSdcbiAgICBsYWJlbE5hbWUuaW5uZXJUZXh0ID0gJ05hbWU6ICdcbiAgICBkaXYxLmFwcGVuZChsYWJlbE5hbWUpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgY29scz1cIjMwXCIgcm93cz1cIjFcIj48L3RleHRhcmVhPlxuICAgIGNvbnN0IHRleHRBcmVhTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB0ZXh0QXJlYU5hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwibmFtZVwiKVxuICAgIHRleHRBcmVhTmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibmFtZVwiKVxuICAgIHRleHRBcmVhTmFtZS5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsXCIzMFwiKVxuICAgIHRleHRBcmVhTmFtZS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsXCIxXCIpXG4gICAgZGl2MS5hcHBlbmRDaGlsZCh0ZXh0QXJlYU5hbWUpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkaXYyKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOiA8L2xhYmVsPlxuICAgIGNvbnN0IGxhYmVsRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxFbWFpbC5odG1sRm9yID0gJ2VtYWlsJ1xuICAgIGxhYmVsRW1haWwuaW5uZXJUZXh0ID0gJ0VtYWlsOiAnXG4gICAgZGl2Mi5hcHBlbmRDaGlsZChsYWJlbEVtYWlsKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxXCI+PC90ZXh0YXJlYT5cbiAgICBjb25zdCB0ZXh0QXJlYUVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHRleHRBcmVhRW1haWwuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiZW1haWxcIilcbiAgICB0ZXh0QXJlYUVtYWlsLnNldEF0dHJpYnV0ZShcImlkXCIsXCJlbWFpbFwiKVxuICAgIHRleHRBcmVhRW1haWwuc2V0QXR0cmlidXRlKFwiY29sc1wiLFwiMzBcIilcbiAgICB0ZXh0QXJlYUVtYWlsLnNldEF0dHJpYnV0ZShcInJvd3NcIixcIjFcIilcbiAgICBkaXYyLmFwcGVuZCh0ZXh0QXJlYUVtYWlsKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY29scz1cIjMwXCIgcm93cz1cIjFcIj48L3RleHRhcmVhPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2MylcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U6IDwvbGFiZWw+XG4gICAgY29uc3QgbGFiZWxNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsTWVzc2FnZS5odG1sRm9yID0gJ21lc3NhZ2UnXG4gICAgbGFiZWxNZXNzYWdlLmlubmVyVGV4dCA9ICdNZXNzYWdlOiAnXG4gICAgZGl2My5hcHBlbmRDaGlsZChsYWJlbE1lc3NhZ2UpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgaWQ9XCJtZXNzYWdlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cbiAgICBjb25zdCB0ZXh0QXJlYU1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdGV4dEFyZWFNZXNzYWdlLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIm1lc3NhZ2VcIilcbiAgICB0ZXh0QXJlYU1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcIm1lc3NhZ2VcIilcbiAgICB0ZXh0QXJlYU1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwiY29sc1wiLFwiMzBcIilcbiAgICB0ZXh0QXJlYU1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwicm93c1wiLFwiMTBcIilcbiAgICBkaXYzLmFwcGVuZENoaWxkKHRleHRBcmVhTWVzc2FnZSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYnV0dG9uJz5cblxuICAgICAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBidG5EaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJylcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnRuLnR5cGUgPSAnc3VibWl0J1xuICAgICAgICBidG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCdcbiAgICAvLyBjb25zdCBidG5UZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bkRpdilcbiAgICAgICAgYnRuRGl2LmFwcGVuZENoaWxkKGJ0bilcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gPC9kaXY+XG5cblxuXG4gICAgXG5cbiAgICByZXR1cm4gb3V0ZXJCb3hcbn1cblxuZXhwb3J0IHsgY29udGFjdCB9ICIsImltcG9ydCBMb2dvIGZyb20gJy4uL3NyYy9hc3NldHMvbG9nby5wbmcnXG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG5cbiAgICAvL2dldCBjb250ZW50IGRpdlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgICAvLyBjcmVhdGUgYWxsIGVsZW1lbnRzIHRvIGFkZFxuICAgIGNvbnN0IG91dGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtYWluQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBuYXZCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRhYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRhYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRhYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjb3Vyc2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGNvbnN0IHN1YkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGxlZnRDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjb25zdCByaWdodENvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjb25zdCBjb3B5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXG4gICAgLy8gYWRkIGNsYXNzbGlzdHNcbiAgICBvdXRlckJveC5jbGFzc0xpc3QuYWRkKCdvdXRlci1ib3gnKVxuICAgIG1haW5Cb3guY2xhc3NMaXN0LmFkZCgnbWFpbi1ib3gnKVxuICAgIG5hdkJveC5jbGFzc0xpc3QuYWRkKCduYXYtYm94JylcbiAgICB0YWIxLmNsYXNzTGlzdC5hZGQoJ3RhYjEnLCd0YWInKVxuICAgIHRhYjIuY2xhc3NMaXN0LmFkZCgndGFiMicsJ3RhYicpXG4gICAgdGFiMy5jbGFzc0xpc3QuYWRkKCd0YWIzJywndGFiJylcbiAgICBjb250ZW50Qm94LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtYm94JylcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgY291cnNlTmFtZS5jbGFzc0xpc3QuYWRkKCdjb3Vyc2UtbmFtZScpXG4gICAgc3ViQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzdWItY29udGVudCcpXG4gICAgbGVmdENvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnbGVmdC1jb250ZW50LWRpdicpXG4gICAgbG9nb0ltZy5jbGFzc0xpc3QuYWRkKCdsb2dvLWltZycpXG4gICAgcmlnaHRDb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWNvbnRlbnQtZGl2JylcbiAgICB0aXRsZVRleHQuY2xhc3NMaXN0LmFkZCgndGl0bGUtdGV4dCcpXG4gICAgY29weVRleHQuY2xhc3NMaXN0LmFkZCgnY29weS10ZXh0JylcblxuICAgIC8vYXBwZW5kIGl0ZW1zXG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChvdXRlckJveCk7XG4gICAgb3V0ZXJCb3guYXBwZW5kQ2hpbGQobWFpbkJveClcbiAgICBtYWluQm94LmFwcGVuZChuYXZCb3gsY29udGVudEJveClcbiAgICBuYXZCb3guYXBwZW5kKHRhYjEsdGFiMix0YWIzKVxuICAgIGNvbnRlbnRCb3guYXBwZW5kKHRpdGxlKVxuICAgIHRpdGxlLmFwcGVuZChjb3Vyc2VOYW1lKVxuICAgIGNvbnRlbnRCb3guYXBwZW5kKHN1YkNvbnRlbnQpXG4gICAgc3ViQ29udGVudC5hcHBlbmQobGVmdENvbnRlbnREaXYpXG4gICAgbGVmdENvbnRlbnREaXYuYXBwZW5kKGxvZ29JbWcpXG4gICAgc3ViQ29udGVudC5hcHBlbmQocmlnaHRDb250ZW50RGl2KVxuICAgIHJpZ2h0Q29udGVudERpdi5hcHBlbmQodGl0bGVUZXh0KVxuICAgIHJpZ2h0Q29udGVudERpdi5hcHBlbmQoY29weVRleHQpXG5cblxuICAgIC8vYWRkIHRleHRcbiAgICB0YWIxLmlubmVySFRNTCA9ICdIb21lJ1xuICAgIHRhYjIuaW5uZXJIVE1MID0gJ01lbnUnXG4gICAgdGFiMy5pbm5lckhUTUwgPSAnQ29udGFjdCdcbiAgICBjb3Vyc2VOYW1lLmlubmVySFRNTCA9ICdUaGUgUm95YWwgQ291cnNlJ1xuICAgIHRpdGxlVGV4dC5pbm5lckhUTUwgPSAnQWJvdXQnXG4gICAgY29weVRleHQuaW5uZXJIVE1MID0gYFRoZSBSb3lhbCBDb3Vyc2Ugd2FzIGNyZWF0ZWQgaW4gMjAwMS4gSXQgd2FzIGRlc2lnbmVkIHRvIGJlIGEgd29ybGQgY2xhc3MgZ29sZiBleHBlcmllbmNlXG4gICAgYW5kIG1pY2hlbGxpbi1zdGFyZWQgcmVzdGF1cmFudC4gQ3JlYXRlZCBieSB3b3JsZCByZW5vd25lZCBhcmNoaXRlY3QgUmV4IEdhYmxlLCBhbmRcbiAgICBtYW5hZ2VkIGJ5IGluZHVzdHJ5IGxlYWRlciBBbGxhbiBHb29kYmFyLCB0aGUgUm95YWwgQ2x1YiBpcyBzdXJlIHRvIG1lZXQgeW91clxuICAgIGV4cGVjdGF0aW9ucy5gXG5cbiAgICAvL2FkZCBpbWFnZVxuICAgIGxvZ29JbWcuc3JjID0gTG9nb1xuICAgIFxuICAgIHJldHVybiBvdXRlckJveFxufVxuXG5leHBvcnQgeyBob21lIH1cblxuXG4vKiA8ZGl2IGNsYXNzPSdvdXRlci1ib3gnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWFpbi1ib3gnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J25hdi1ib3gnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0YWIxIHRhYic+SG9tZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0YWIyIHRhYic+TWVudTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0YWIzIHRhYic+Q29udGFjdDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbnRlbnQtYm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPSdjb3Vyc2UtbmFtZSc+VGhlIFJveWFsIENvdXJzZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdWItY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdsZWZ0LWNvbnRlbnQtZGl2Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvbG9nby5wbmdcIiBhbHQ9XCJcIiBjbGFzcz0nbG9nby1pbWcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdyaWdodC1jb250ZW50LWRpdic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPSd0aXRsZS10ZXh0Jz5BYm91dDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9J2NvcHktdGV4dD5UaGUgUm95YWwgQ291cnNlIHdhcyBjcmVhdGVkIGluIDIwMDEuIEl0IHdhcyBkZXNpZ25lZCB0byBiZSBhIHdvcmxkIGNsYXNzIGdvbGYgZXhwZXJpZW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgbWljaGVsbGluLXN0YXJlZCByZXN0YXVyYW50LiBDcmVhdGVkIGJ5IHdvcmxkIHJlbm93bmVkIGFyY2hpdGVjdCBSZXggR2FibGUsIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VkIGJ5IGluZHVzdHJ5IGxlYWRlciBBbGxhbiBHb29kYmFyLCB0aGUgUm95YWwgQ2x1YiBpcyBzdXJlIHRvIG1lZXQgeW91clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RhdGlvbnMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqLyIsImltcG9ydCBCZWVyIGZyb20gJy4vYXNzZXRzL2JlZXIuanBnJ1xuaW1wb3J0IEhhbWJ1cmdlciBmcm9tICcuL2Fzc2V0cy9oYW1idXJnZXIuanBnJ1xuaW1wb3J0IENhZXNhclNhbGFkIGZyb20gJy4vYXNzZXRzL2NhZXNhcl9zYWxhZC5qcGcnXG5pbXBvcnQgTGVtb25hZGUgZnJvbSAnLi9hc3NldHMvbGVtb25hZGUuanBnJ1xuaW1wb3J0IFBpenphIGZyb20gJy4vYXNzZXRzL3BpenphLmpwZydcbmltcG9ydCBTYW5kd2ljaCBmcm9tICcuL2Fzc2V0cy9zYW5kd2ljaC5qcGcnXG5cblxuZnVuY3Rpb24gbWVudSgpIHtcblxuICAgIC8vY3JlYXRlIGFsbCBlbGVtZW50cyB0byBhZGRcbiAgICBcblxuXG4vLyA8ZGl2IGNsYXNzPSdvdXRlci1ib3gnPlxuICAgIGNvbnN0IG91dGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBvdXRlckJveC5jbGFzc0xpc3QuYWRkKCdvdXRlci1ib3gnKVxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWFpbi1ib3gnPlxuICAgIGNvbnN0IG1haW5Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Cb3guY2xhc3NMaXN0LmFkZCgnbWFpbi1ib3gnKVxuICAgIG91dGVyQm94LmFwcGVuZENoaWxkKG1haW5Cb3gpXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbmF2LWJveCc+XG4gICAgY29uc3QgbmF2Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuYXZCb3guY2xhc3NMaXN0LmFkZCgnbmF2LWJveCcpXG4gICAgbWFpbkJveC5hcHBlbmRDaGlsZChuYXZCb3gpXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RhYjEgdGFiJz5Ib21lPC9kaXY+XG4gICAgY29uc3QgdGFiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiMS5jbGFzc0xpc3QuYWRkKCd0YWIxJywndGFiJylcbiAgICB0YWIxLmlubmVyVGV4dCA9ICdIb21lJ1xuICAgIG5hdkJveC5hcHBlbmRDaGlsZCh0YWIxKVxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0YWIyIHRhYic+TWVudTwvZGl2PlxuICAgIGNvbnN0IHRhYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYjIuY2xhc3NMaXN0LmFkZCgndGFiMicsJ3RhYicpXG4gICAgdGFiMi5pbm5lclRleHQgPSAnTWVudSdcbiAgICBuYXZCb3guYXBwZW5kQ2hpbGQodGFiMilcbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGFiMyB0YWInPkNvbnRhY3Q8L2Rpdj5cbiAgICBjb25zdCB0YWIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWIzLmNsYXNzTGlzdC5hZGQoJ3RhYjMnLCd0YWInKVxuICAgIHRhYjMuaW5uZXJUZXh0ID0gJ0NvbnRhY3QnXG4gICAgbmF2Qm94LmFwcGVuZENoaWxkKHRhYjMpXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29udGVudC1ib3gtbWVudSc+XG4gICAgY29uc3QgY29udGVudEJveE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRlbnRCb3hNZW51LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtYm94LW1lbnUnKVxuICAgIG1haW5Cb3guYXBwZW5kQ2hpbGQoY29udGVudEJveE1lbnUpXG5cbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1pbnRybyc+VGhlIG1lbnUgYXQgdGhlIFJveWFsIGNsdWIgd2FzIGNyZWF0ZWQgYnkgTWljaGVsbGluIGF3YXJkZWQgY2hlZiBBbGxlblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgR29vZGJhci4gVGhlIGZvb2QgaXMgYWxsIGdyb3duIG9yZ2FuaWNhbGx5IG9uIHNpdGUsIGFuZCB3ZSB1c2UgcmVnZW5lcmF0aXZlIGZhcm1pbmcgdGVjaG5pcXVlc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdG8gZW5zdXJlIGVudmlyb25tZW50YWwgc3RhYmlsaXR5LlxuLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBjb25zdCBtZW51SW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVJbnRyby5jbGFzc0xpc3QuYWRkKCdtZW51LWludHJvJylcbiAgICBtZW51SW50cm8uaW5uZXJUZXh0ID0gYFRoZSBtZW51IGF0IHRoZSBSb3lhbCBjbHViIHdhcyBjcmVhdGVkIGJ5IE1pY2hlbGxpbiBhd2FyZGVkIGNoZWYgQWxsZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR29vZGJhci4gVGhlIGZvb2QgaXMgYWxsIGdyb3duIG9yZ2FuaWNhbGx5IG9uIHNpdGUsIGFuZCB3ZSB1c2UgcmVnZW5lcmF0aXZlIGZhcm1pbmcgdGVjaG5pcXVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGVuc3VyZSBlbnZpcm9ubWVudGFsIHN0YWJpbGl0eS5gXG4gICAgY29udGVudEJveE1lbnUuYXBwZW5kQ2hpbGQobWVudUludHJvKVxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb29kLWl0ZW1zJz5cbiAgICBjb25zdCBmb29kSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb2RJdGVtcy5jbGFzc0xpc3QuYWRkKCdmb29kLWl0ZW1zJylcbiAgICBjb250ZW50Qm94TWVudS5hcHBlbmRDaGlsZChmb29kSXRlbXMpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LXJvdyByb3cxJz5cbiAgICBjb25zdCBtZW51Um93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudVJvdzEuY2xhc3NMaXN0LmFkZCgnbWVudS1yb3cnLCAncm93MScpXG4gICAgZm9vZEl0ZW1zLmFwcGVuZENoaWxkKG1lbnVSb3cxKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2l0ZW0xIGl0ZW0nPlxuICAgIGNvbnN0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpdGVtMS5jbGFzc0xpc3QuYWRkKCdpdGVtMScsJ2l0ZW0nKVxuICAgIG1lbnVSb3cxLmFwcGVuZENoaWxkKGl0ZW0xKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvaGFtYnVyZ2VyLmpwZ1wiIGFsdD1cIlwiPlxuICAgIGNvbnN0IGhhbWJ1cmdlclBpYyA9IG5ldyBJbWFnZSgpXG4gICAgaGFtYnVyZ2VyUGljLnNyYyA9IEhhbWJ1cmdlclxuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGhhbWJ1cmdlclBpYylcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIGhhbWJ1cmdlciBpcyBjb21wbGV0ZWx5IGZhcm0gdG8gdGFibGUsIGFuZCByaXZhbHMgV2FneXUgYmVlZiBpbiBpdCdzIHRhc3RlLlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmVkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIEZyaWVzLjxicj4kMTA8L3A+XG4gICAgY29uc3QgaGFtYnVyZ2VyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGhhbWJ1cmdlclRleHQuaW5uZXJIVE1MID0gYFRoaXMgaGFtYnVyZ2VyIGlzIGNvbXBsZXRlbHkgZmFybSB0byB0YWJsZSwgYW5kIHJpdmFscyBXYWd5dSBiZWVmIGluIGl0J3MgdGFzdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIEZyaWVzLjxicj4kMTBgXG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyVGV4dClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdpdGVtMiBpdGVtJz5cbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaXRlbTIuY2xhc3NMaXN0LmFkZCgnaXRlbTInLCdpdGVtJylcbiAgICBtZW51Um93MS5hcHBlbmRDaGlsZChpdGVtMilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2NhZXNhcl9zYWxhZC5qcGdcIiBhbHQ9XCJcIj5cbiAgICBjb25zdCBzYWxhZEltZyA9IG5ldyBJbWFnZSgpXG4gICAgc2FsYWRJbWcuc3JjID0gQ2Flc2FyU2FsYWRcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChzYWxhZEltZylcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIHNhbGFkIGlzIGFtb25nIHRoZSBiZXN0IGluIHRoZSB3b3JsZC4gRnJlc2ggY2Flc2FyIHNhbGFkIHdpdGggYSBjcmVhbXkgaG91c2Vcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hZGVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZXNzaW5nIGFuZCBpbmNyZWRpYmxlIGdyaWxsZWQgY2hpY2tlbjxicj4kMTA8L3A+XG4gICAgY29uc3Qgc2FsYWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc2FsYWRUZXh0LmlubmVySFRNTCA9IGBUaGlzIHNhbGFkIGlzIGFtb25nIHRoZSBiZXN0IGluIHRoZSB3b3JsZC4gRnJlc2ggY2Flc2FyIHNhbGFkIHdpdGggYSBjcmVhbXkgaG91c2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmVzc2luZyBhbmQgaW5jcmVkaWJsZSBncmlsbGVkIGNoaWNrZW48YnI+JDEwYFxuICAgIGl0ZW0yLmFwcGVuZENoaWxkKHNhbGFkVGV4dClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1yb3cgcm93Mic+XG4gICAgY29uc3QgbWVudVJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVSb3cyLmNsYXNzTGlzdC5hZGQoJ21lbnUtcm93Jywncm93MicpXG4gICAgZm9vZEl0ZW1zLmFwcGVuZENoaWxkKG1lbnVSb3cyKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2l0ZW0zIGl0ZW0nPlxuICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpdGVtMy5jbGFzc0xpc3QuYWRkKCdpdGVtMycsJ2l0ZW0nKVxuICAgIG1lbnVSb3cyLmFwcGVuZENoaWxkKGl0ZW0zKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9hc3NldHMvc2FuZHdpY2guanBnXCIgYWx0PVwiXCI+XG4gICAgY29uc3Qgc2FuZHdpY2hJbWcgPSBuZXcgSW1hZ2UoKVxuICAgIHNhbmR3aWNoSW1nLnNyYyA9IFNhbmR3aWNoXG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQoc2FuZHdpY2hJbWcpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBiZXN0IGNsdWIgc2FuZHdpY2ggaW4gdGhlIGNvdW50cnkuIFBlcmlvZC5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZlZFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBGcmllcy48YnI+JDEwPC9wPlxuICAgIGNvbnN0IHNhbmR3aWNoVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHNhbmR3aWNoVGV4dC5pbm5lclRleHQgPSBgVGhlIGJlc3QgY2x1YiBzYW5kd2ljaCBpbiB0aGUgY291bnRyeS4gUGVyaW9kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBGcmllcy48YnI+JDEwYFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIGl0ZW0zLmFwcGVuZENoaWxkKHNhbmR3aWNoVGV4dClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdpdGVtNCBpdGVtJz5cbiAgICBjb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaXRlbTQuY2xhc3NMaXN0LmFkZCgnaXRlbTQnLCdpdGVtJylcbiAgICBtZW51Um93Mi5hcHBlbmRDaGlsZChpdGVtNClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL3BpenphLmpwZ1wiIGFsdD1cIlwiPlxuICAgIGNvbnN0IHBpenphSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBwaXp6YUltZy5zcmMgPSBQaXp6YVxuICAgIGl0ZW00LmFwcGVuZChwaXp6YUltZylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhpcyBoYW1idXJnZXIgaXMgY29tcGxldGVseSBmYXJtIHRvIHRhYmxlLCBhbmQgcml2YWxzIFdhZ3l1IGJlZWYgaW4gaXQncyB0YXN0ZS5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZlZFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBGcmllcy48YnI+JDEwPC9wPlxuICAgIGNvbnN0IHBpenphVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBpenphVGV4dC5pbm5lclRleHQgPSBgVGhpcyBoYW1idXJnZXIgaXMgY29tcGxldGVseSBmYXJtIHRvIHRhYmxlLCBhbmQgcml2YWxzIFdhZ3l1IGJlZWYgaW4gaXQncyB0YXN0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggRnJpZXMuPGJyPiQxMGBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBpdGVtNC5hcHBlbmRDaGlsZChwaXp6YVRleHQpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lbnUtcm93IHJvdzMnPlxuICAgIGNvbnN0IG1lbnVSb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51Um93My5jbGFzc0xpc3QuYWRkKCdtZW51LXJvdycsJ3JvdzMnKVxuICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZChtZW51Um93Mylcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdpdGVtNSBpdGVtJz5cbiAgICBjb25zdCBpdGVtNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaXRlbTUuY2xhc3NMaXN0LmFkZCgnaXRlbTUnLCdpdGVtJylcbiAgICBtZW51Um93My5hcHBlbmRDaGlsZChpdGVtNSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL2xlbW9uYWRlLmpwZ1wiIGFsdD1cIlwiPlxuICAgIGNvbnN0IGxlbW9uYWRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBsZW1vbmFkZUltZy5zcmMgPSBMZW1vbmFkZVxuICAgIGl0ZW01LmFwcGVuZENoaWxkKGxlbW9uYWRlSW1nKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EZWxpY2lvdXMgbGVtb25hZGUgbWFkZSBvbiBzaXRlPGJyPiQyPC9wPlxuICAgIGNvbnN0IGxlbW9uYWRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGxlbW9uYWRlVGV4dC5pbm5lckhUTUwgPSBgRGVsaWNpb3VzIGxlbW9uYWRlIG1hZGUgb24gc2l0ZTxicj4kMmBcbiAgICBpdGVtNS5hcHBlbmRDaGlsZChsZW1vbmFkZVRleHQpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0naXRlbTYgaXRlbSc+XG4gICAgY29uc3QgaXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGl0ZW02LmNsYXNzTGlzdC5hZGQoJ2l0ZW02JywnaXRlbScpXG4gICAgbWVudVJvdzMuYXBwZW5kQ2hpbGQoaXRlbTYpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2Fzc2V0cy9iZWVyLmpwZ1wiIGFsdD1cIlwiPlxuICAgIGNvbnN0IGJlZXJJbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGJlZXJJbWcuc3JjID0gQmVlclxuICAgIGl0ZW02LmFwcGVuZENoaWxkKGJlZXJJbWcpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhhcmQgdG8gYmVhdCBhIGNvbGQgYmVlciBvbiBhIHdhcm0gZGF5ITxicj4kNTwvcD5cbiAgICBjb25zdCBiZWVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGJlZXJUZXh0LmlubmVySFRNTCA9IGBIYXJkIHRvIGJlYXQgYSBjb2xkIGJlZXIgb24gYSB3YXJtIGRheSE8YnI+JDVgXG4gICAgaXRlbTYuYXBwZW5kQ2hpbGQoYmVlclRleHQpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuXG4gICAgcmV0dXJuIG91dGVyQm94XG59XG5cbmV4cG9ydCB7IG1lbnUgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGhvbWUgfSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gJy4vY29udGFjdC5qcydcbmNvbnNvbGUubG9nKCd3ZWJwYWNrIGlzIHdvcmtpbmcnKVxuXG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuXG4vLyBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSlcblxuLy8gZnVuY3Rpb24gaG9tZUNsaWNrKCkge1xuLy8gICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbi8vICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuLy8gICAgIH1cbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSlcbi8vICAgICBhc3NpZ25FdmVudExpc3RlbmVycygpXG4vLyAgIH1cblxuXG5sZXQgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWIxJylcbmxldCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYjInKVxubGV0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiMycpXG5cbi8vIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG1lbnVDbGljaylcblxuZnVuY3Rpb24gbWVudUNsaWNrKCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUoKSlcbiAgICBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYjEnKVxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGhvbWVDbGljaylcbiAgICBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYjMnKVxuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNvbnRhY3RDbGljaylcbn1cblxuZnVuY3Rpb24gaG9tZUNsaWNrKCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUoKSlcbiAgICBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYjInKVxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG1lbnVDbGljaylcbiAgICBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYjMnKVxuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNvbnRhY3RDbGljaylcbn1cblxuZnVuY3Rpb24gY29udGFjdENsaWNrKCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QoKSlcbiAgICBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYjInKVxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG1lbnVDbGljaylcbiAgICBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYjEnKVxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGhvbWVDbGljaylcbn1cblxuaG9tZUNsaWNrKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=