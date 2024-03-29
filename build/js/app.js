const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const menu = document.getElementById('mobile-menu')


    const toggleMenu = () => {
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)