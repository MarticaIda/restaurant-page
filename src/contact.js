import { content } from './main-page'

export default function loadContact () {
  const contactSpan = document.createElement('span')
  contactSpan.textContent =
    'If you need to get in touch, call us at our phone number during regular business hours'
  content.appendChild(contactSpan)
}
