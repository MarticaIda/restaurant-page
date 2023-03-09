import loadMain, { content } from './main-page'
import loadMenu from './menu'
import loadContact from './contact'
// import './style.css'

loadMain()

const mainPage = document.getElementById('main-page')
const menu = document.getElementById('menu')
const contact = document.getElementById('contact')
mainPage.addEventListener('click', () => {
  content.textContent = ''
  loadMain()
})
menu.addEventListener('click', () => {
  content.textContent = ''
  loadMenu()
})
contact.addEventListener('click', () => {
  content.textContent = ''
  loadContact()
})
