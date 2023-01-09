const switchButton = document.querySelector("#switch-button")
const siteMode = document.querySelector("#site-mode")
const body = document.querySelector("body")
const a = document.querySelectorAll("a")

switchButton.addEventListener("click", (e) => {
  let btnChecked = switchButton.checked
  
  if (btnChecked) {
    siteMode.textContent = "Escuro"
    body.style.color = "black"

    if (window.innerWidth < 769) {
      body.style.backgroundImage = "url(images/bg-mobile-light.jpg)"
    } else {
      body.style.backgroundImage = "url(images/bg-desktop-light.jpg)"
    }

    a.forEach((linkElement) => {
      linkElement.style.color = "black"
    })
  } else {
    siteMode.textContent = "Claro"
    body.style.color = "white"

    if (window.innerWidth < 769) {
      body.style.backgroundImage = "url(images/bg-mobile.jpg)"
    } else {
      body.style.backgroundImage = "url(images/bg-desktop.jpg)"
    }

    a.forEach((linkElement) => {
      linkElement.style.color = "white"
    })
  }
})

