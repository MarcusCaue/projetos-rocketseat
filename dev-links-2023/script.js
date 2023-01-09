// Função que altera o tema da página entre escuro e claro
function alterarTema(estilos) {
  const pageTheme = document.querySelector("#page-theme")
  const body = document.querySelector("body")
  const imgPerfil = document.querySelector("#perfil")

  
  pageTheme.textContent = estilos.pageTheme
  body.style.color = estilos.bodyColor
  body.style.backgroundImage = estilos.bgImage
  imgPerfil.style.border = estilos.perfilBorder

  stylesAnchor.color = estilos.anchorColor
  stylesLinks.border = estilos.linksBorder
  stylesLinksHover.backgroundColor = estilos.linksHoverBgColor
  stylesIconsHover.backgroundColor = estilos.iconsHoverBgColor
}

// Seleciona todas as regras de CSS do arquivo "style.css"
const rulesCss = document.styleSheets[0].cssRules
// Seleciona os estilos dos links quando estão em hover 
const stylesLinksHover = rulesCss.item(12).style
// Seleciona os estilos dos ícones quando estão em hover 
const stylesIconsHover = rulesCss.item(7).style
// Seleciona os estilos das tags a
const stylesAnchor = rulesCss.item(2).style
// Seleciona os estilos dos links
const stylesLinks = rulesCss.item(11).style

// Botão que permitirá a troca de temas da página
const switchButton = document.querySelector("#switch-button")

// Estilos do Modo Escuro
const darkTheme = {
  pageTheme: "Claro",
  bodyColor: "white",
  bgImage: "url(images/bg-desktop.jpg)",
  perfilBorder: "2px solid #ffffff80",
  anchorColor: "white",
  linksBorder: "1px solid #ffffff80",
  linksHoverBgColor: "#0c0c0c4b",
  iconsHoverBgColor: "#ffffff1f"
}
// Estilos do Modo Claro
const lightTheme = {
  pageTheme: "Escuro",
  bodyColor: "black",
  bgImage: "url(images/bg-desktop-light.jpg)",
  perfilBorder: "2px solid #00000080",
  anchorColor: "black",
  linksBorder: "1px solid #00000080",
  linksHoverBgColor: "#c7a4a42e",
  iconsHoverBgColor: "#3a3a3a3b"
}
// Configurando o evento para o switchButton
switchButton.addEventListener("click", () => {
  let btnChecked = switchButton.checked
  
  // Se o botão estiver marcado, mudar para o tema claro; do contário, para o tema escuro
  if (btnChecked) { alterarTema(lightTheme)} else { alterarTema(darkTheme) }
})

  // // Modo claro
  // if (btnChecked) {
  //   siteMode.textContent = "Escuro"
  //   body.style.color = "black"
  //   perfil.style.border = "2px solid rgba(0, 0, 0, 0.5)"

  //   if (window.innerWidth < 769) {
  //     body.style.backgroundImage = "url(images/bg-mobile-light.jpg)"
  //   } else {
  //     body.style.backgroundImage = "url(images/bg-desktop-light.jpg)"
  //   }

  //   a.forEach((linkElement) => {
  //     linkElement.style.color = "black"
  //   })

  //   links.forEach(link => {
  //     link.style.border = "1px solid rgba(0, 0, 0, 0.5)"
  //   })

  //   stylesLinkHover.backgroundColor = "rgb(199 164 164 / 18%)"
  //   stylesIconHover.backgroundColor = "rgb(58 58 58 / 23%)"
    
  // } 
  // // Modo Escuro
  // else {
  //   siteMode.textContent = "Claro"
  //   body.style.color = "white"
  //   perfil.style.border = "2px solid rgba(255, 255, 255, 0.5)"

  //   if (window.innerWidth < 769) {
  //     body.style.backgroundImage = "url(images/bg-mobile.jpg)"
  //   } else {
  //     body.style.backgroundImage = "url(images/bg-desktop.jpg)"
  //   }

  //   a.forEach((linkElement) => { linkElement.style.color = "white" })

  //   links.forEach(link => {
  //     link.style.border = "1px solid rgba(255, 255, 255, 0.5)"
  //   })

  //   stylesLinkHover.backgroundColor = "rgba(12, 12, 12, 0.295)"
  //   stylesIconHover.backgroundColor = "rgba(255, 255, 255, 0.123)"

  // }

