// most of the work here will be done with logic and a little math
// what's the usual measurement of a progress bar? you'll need to measure the same way here
// use that measurement to update the style of your inner fill element as you scroll
const scrollBar = document.getElementById('scroll-fill')

document.addEventListener('scroll', function(){
    const scrolled = (scrollContainer().scrollTop /
    (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *100;

    scrollBar.style.width = `${scrolled}%`
})
function scrollContainer(){
    return document.documentElement || document.body;
}