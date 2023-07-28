const toggleMobileMenu = (e) => {
    if (header.style.display === '' || header.style.display === 'none') {
        header.style.display = 'block' 
        main.style.display = 'none'
        cross.style.display = 'block'
        hamBurger.style.display = 'none'
    } else {
        header.style.display = 'none'
        main.style.display = 'block'
        hamBurger.style.display = 'block'
        cross.style.display = 'none'
    }
}     
    


const hamBurger = document.querySelector(".burger")
const header = document.querySelector("header")
const main = document.querySelector("main")
const cross = document.querySelector(".cross")

hamBurger.addEventListener('click', e => toggleMobileMenu(e))
cross.addEventListener('click', e => toggleMobileMenu(e))