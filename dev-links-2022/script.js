const switchButton = document.querySelector("#switch-button")
const siteMode = document.querySelector("#site-mode")
const body = document.querySelector("body")
const a = document.querySelectorAll("a")
const links = document.querySelectorAll(".link")
const imgPerfil = document.querySelector("#perfil")
const icons = document.querySelectorAll(".icon:hover")


switchButton.addEventListener("click", (e) => {
  let btnChecked = switchButton.checked
  
  // Modo claro
  if (btnChecked) {
    siteMode.textContent = "Escuro"
    body.style.color = "black"
    perfil.style.border = "2px solid rgba(0, 0, 0, 0.5)"

    if (window.innerWidth < 769) {
      body.style.backgroundImage = "url(images/bg-mobile-light.jpg)"
    } else {
      body.style.backgroundImage = "url(images/bg-desktop-light.jpg)"
    }

    a.forEach((linkElement) => {
      linkElement.style.color = "black"
    })

    links.forEach(link => {
      link.style.border = "1px solid rgba(0, 0, 0, 0.5)"
    })

    linksHover.forEach(link => {
      link.style.backgroundColor = "rgb(199 164 164 / 18%);"
    })

    icons.forEach(icon => {
      icon.style.backgroundColor = "rgb(58 58 58 / 12%)"
    })
  } 
  // Modo Escuro
  else {
    siteMode.textContent = "Claro"
    body.style.color = "white"
    perfil.style.border = "2px solid rgba(255, 255, 255, 0.5)"

    if (window.innerWidth < 769) {
      body.style.backgroundImage = "url(images/bg-mobile.jpg)"
    } else {
      body.style.backgroundImage = "url(images/bg-desktop.jpg)"
    }

    a.forEach((linkElement) => { linkElement.style.color = "white" })

    links.forEach(link => {
      link.style.border = "1px solid rgba(255, 255, 255, 0.5)"
    })

    linksHover.forEach(link => {
      link.style.backgroundColor = "rgba(12, 12, 12, 0.295)"
    })

    icons.forEach(icon => {
      icon.style.backgroundColor = "rgba(255, 255, 255, 0.123)"
    })

  }
})

