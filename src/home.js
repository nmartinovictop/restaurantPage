

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
    
    return outerBox
}

export { home }


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