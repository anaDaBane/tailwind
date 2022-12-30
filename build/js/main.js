const initApp = () => {
  const mobileBtn = document.querySelector('#mobileButton')
  const mobileMenu = document.querySelector('#mobileMenu')

  const toggleTheme = () => {
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('hidden')
  }

  mobileBtn.addEventListener('click', toggleTheme)
  mobileMenu.addEventListener('click', toggleTheme)
}
document.addEventListener('DOMContentLoaded', initApp)
