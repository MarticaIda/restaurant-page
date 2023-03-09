import { content } from './main-page'

export default function loadMenu () {
  const menuItemOne = document.createElement('div')
  menuItemOne.textContent = 'Homestyle fried potatoes'
  content.appendChild(menuItemOne)
}
