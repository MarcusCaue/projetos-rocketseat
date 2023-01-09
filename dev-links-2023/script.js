// Função que altera o tema da página entre escuro e claro
function alterarTema(estilos) {
  const pageTheme = document.querySelector("#page-theme")
  const body = document.querySelector("body")
  const imgPerfil = document.querySelector("#perfil")

  pageTheme.textContent = estilos.pageTheme
  body.style.color = estilos.bodyColor
  body.style.backgroundImage = estilos.bgImage
  imgPerfil.style.border = estilos.perfilBorder
  imgPerfil.src = estilos.avatar

  stylesAnchor.color = estilos.anchorColor
  stylesLinks.border = estilos.linksBorder
  stylesLinksHover.backgroundColor = estilos.linksHoverBgColor
  stylesIconsHover.backgroundColor = estilos.iconsHoverBgColor
}

// Seleciona todas as regras de CSS do arquivo "style.css"
const rulesCss = document.styleSheets[0].cssRules
// Seleciona os estilos dos links quando estão em hover 
const stylesLinksHover = rulesCss.item(11).style
// Seleciona os estilos dos ícones quando estão em hover 
const stylesIconsHover = rulesCss.item(6).style
// Seleciona os estilos das tags a
const stylesAnchor = rulesCss.item(1).style
// Seleciona os estilos dos links
const stylesLinks = rulesCss.item(10).style

// Botão que permitirá a troca de temas da página
const switchButton = document.querySelector("#switch-button")

// Estilos do Modo Escuro
const darkTheme = {
  pageTheme: "Claro",
  avatar: "images/avatar.jpg",
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
  avatar: "https://github.com/MarcusCaue.png",
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
