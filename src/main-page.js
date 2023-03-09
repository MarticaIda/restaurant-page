export default function loadPage () {
  const content = document.getElementById('content')

  const headline = document.createElement('h1')
  headline.textContent = 'Out Of The Frying Pan Into The Fire'
  content.appendChild(headline)

  const imgHero = document.createElement('img')
  imgHero.setAttribute('src', '/src/fire-hero.jpg')
  content.appendChild(imgHero)

  const aboutSpan = document.createElement('span')
  aboutSpan.textContent = `Our family restaurant has been founded in 1948 and since then became a
  local favorite spot to eat a good meal, drink fine wine and enjoy each
  other's company.`
  content.appendChild(aboutSpan)
}
