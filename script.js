const backToTopButton = window.document.getElementById('backToTopButton')
window.addEventListener('scroll', ()=> {    
    if(window.scrollY>350) {
        backToTopButton.classList.remove('hidden')
    } else {
        backToTopButton.classList.add('hidden')
    }
})