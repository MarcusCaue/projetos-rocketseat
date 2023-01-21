// Função que altera o tema da página entre escuro e claro dado um objeto contendo os estilos
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

// Função que pega uma regra CSS específica do arquivo "style.css" dado o seu seletor
function getRule(selector) {
  for (let i = 0; i < rulesCss.length; i++) {
    let rule = rulesCss.item(i)

    if (rule.selectorText === selector) {
      return rule.style
    }
  }
}

// Seleciona todas as regras de CSS do arquivo "style.css"
const rulesCss = document.styleSheets[0].cssRules
// Seleciona os estilos dos links quando estão em hover
const stylesLinksHover = getRule(".link:hover")
// Seleciona os estilos dos ícones quando estão em hover
const stylesIconsHover = getRule(".icon:hover")
// Seleciona os estilos das tags a
const stylesAnchor = getRule("a")
// Seleciona os estilos dos links
const stylesLinks = getRule(".link")

// Botão que permitirá a troca de temas da página
const alterThemeButton = document.querySelector("#alter-theme")

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
  iconsHoverBgColor: "#ffffff1f",
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
  iconsHoverBgColor: "#3a3a3a3b",
}
// Configurando o evento para o botão que troca o tema da página
alterThemeButton.addEventListener("click", () => {
  let btnChecked = alterThemeButton.checked

  // Se o botão estiver marcado, muda para o tema claro; do contário, para o tema escuro
  if (btnChecked) {
    alterarTema(lightTheme)
  } else {
    alterarTema(darkTheme)
  }
})
