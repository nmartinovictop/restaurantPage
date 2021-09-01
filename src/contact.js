
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

export { contact } 