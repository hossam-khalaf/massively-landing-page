const mobileMenu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('.nav__menu--button')
const closeBtn = document.querySelector('.close')

menuBtn.addEventListener('click', () => {
	mobileMenu.classList.add('translate-x')
})

closeBtn.addEventListener('click', () => {
	mobileMenu.classList.remove('translate-x')
})
