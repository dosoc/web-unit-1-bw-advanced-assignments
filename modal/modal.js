// you will need to toggle the visibility off and on with DOM selectors
const popUp = document.getElementById("pop-up");
const slideIn = document.getElementById("slide-in");
const popUpButton = document.getElementById("pop-up-btn");
const slideInButton = document.getElementById("slide-in-btn");
const closePopUp = document.querySelector('.close-pop-up')
const closeSlideIn = document.querySelector('.close-slide-in')

popUpButton.addEventListener('click', function(){
    popUp.style.transform = 'scale(1)';
})
closePopUp.addEventListener('click', function(){
    popUp.style.transform = 'scale(0)';
} )
slideInButton.addEventListener('click', function(){
    slideIn.style.transform = 'translateX(0%)';
})
closeSlideIn.addEventListener('click', function(){
    slideIn.style.transform = 'translateX(100%)'
})