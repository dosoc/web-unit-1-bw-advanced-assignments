// you need to create DOM selectors to grab the correct HTML elements and update their styles to the opposite theme's css classes when you want to toggle the theme off and on
const toggleLight = document.querySelector('.toggle-button')
const title = document.querySelector('.title-light')

toggleLight.addEventListener('mousedown', () => {
    let mode = document.body.classList
    mode.toggle('dark');
    if (title.innerHTML === 'Light Mode'){
        title.innerHTML = 'Dark Mode'
        toggleLight.innerHTML = 'Toggle Light Mode';
    } else if (title.innerHTML === 'Dark Mode' ) {
        title.innerHTML = 'Light Mode'
        toggleLight.innerHTML = 'Toggle Dark Mode';
    }
    
})
