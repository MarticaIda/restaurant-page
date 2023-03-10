import Background from './fire-hero.jpg'

export const content = document.getElementById('content')
export default function loadMain () {
  const headline = document.createElement('h1')
  headline.textContent = 'Out Of The Frying Pan Into The Fire'
  content.appendChild(headline)

  const imgHero = document.createElement('img')
  imgHero.setAttribute('src', Background)
  content.appendChild(imgHero)

  const aboutSpan = document.createElement('span')
  aboutSpan.textContent = `Our family restaurant was founded in 1948 and since then became a
  local favorite spot to eat a good meal, drink fine wine and enjoy each
  other's company.`
  content.appendChild(aboutSpan)
}
