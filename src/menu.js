

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
    const hamburgerPic = document.createElement('img')
    hamburgerPic.src = '../src/assets/hamburger.jpg'
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
    const saladImg = document.createElement('img')
    saladImg.src = `../src/assets/caesar_salad.jpg`
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
    const sandwichImg = document.createElement('img')
    sandwichImg.src = '../src/assets/sandwich.jpg'
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
    pizzaImg.src = '../src/assets/pizza.jpg'
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
    lemonadeImg.src = `../src/assets/lemonade.jpg`
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
    const beerImg = document.createElement('img')
    beerImg.src = '../src/assets/beer.jpg'
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

export { menu }