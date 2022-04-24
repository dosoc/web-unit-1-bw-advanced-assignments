// you need to create DOM selectors to grab the correct HTML elements and update their styles to the opposite theme's css classes when you want to toggle the theme off and on
const toggleLight = document.querySelector('.toggle-button')
const title = document.querySelector('.title-light')
const toggleSwitch = document.querySelector('.toggle-btn')


toggleSwitch.addEventListener('click', ()=> {
    let mode = document.body.classList
    mode.toggle('dark');
    toggleSwitch.classList.toggle('active')
    if (title.innerHTML === 'Light Mode'){
        title.innerHTML = 'Dark Mode'

    } else if (title.innerHTML === 'Dark Mode' ) {
        title.innerHTML = 'Light Mode'

    }
   
})
