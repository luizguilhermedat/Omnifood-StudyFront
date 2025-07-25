console.log("Hello world!"); // Imprime "Hello world!" no console

const myName = "Luiz Guilherme"; // Declara uma constante chamada myName e atribui o valor "Luiz Guilherme"
const h1 = document.querySelector(".heading-primary"); // Declara uma constante chamada h1 e atribui o elemento com a classe "heading-primary"
console.log(myName); // Imprime o valor de myName no console
console.log(h1); // Imprime o elemento h1 no console

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Define o ano atual
const yearEl = document.querySelector(".year"); // Seleciona o elemento com a classe "year"
const currentYear = new Date().getFullYear(); // Obtém o ano atual
yearEl.textContent = currentYear; // Define o conteúdo de texto do elemento yearEl para o ano atual

///////////////////////////////////////////////////////////
// Faz a navegação móvel funcionar

const btnNavEl = document.querySelector(".btn-mobile-nav"); // Seleciona o botão de navegação móvel
const headerEl = document.querySelector(".header"); // Seleciona o cabeçalho

btnNavEl.addEventListener("click", function () {
  // Adiciona um ouvinte de evento de clique ao botão de navegação móvel
  headerEl.classList.toggle("nav-open"); // Alterna a classe "nav-open" no cabeçalho
});

///////////////////////////////////////////////////////////
// Animação de rolagem suave

const allLinks = document.querySelectorAll("a:link"); // Seleciona todos os links

allLinks.forEach(function (link) {
  // Para cada link
  link.addEventListener("click", function (e) {
    // Adiciona um ouvinte de evento de clique
    e.preventDefault(); // Previne o comportamento padrão do link
    const href = link.getAttribute("href"); // Obtém o atributo href do link

    // Rola de volta para o topo
    if (href === "#")
      // Se o href for "#"
      window.scrollTo({
        // Rola para o topo
        top: 0, // Define o topo como 0
        behavior: "smooth", // Define o comportamento como suave
      });

    // Rola para outros links
    if (href !== "#" && href.startsWith("#")) {
      // Se o href não for "#" e começar com "#"
      const sectionEl = document.querySelector(href); // Seleciona o elemento com o href
      sectionEl.scrollIntoView({ behavior: "smooth" }); // Rola para o elemento com comportamento suave
    }

    // Fecha a navegação móvel
    if (link.classList.contains("main-nav-link"))
      // Se o link contém a classe "main-nav-link"
      headerEl.classList.toggle("nav-open"); // Alterna a classe "nav-open" no cabeçalho
  });
});

///////////////////////////////////////////////////////////
// Navegação fixa

const sectionHeroEl = document.querySelector(".section-hero"); // Seleciona a seção hero

const obs = new IntersectionObserver(
  // Cria um novo IntersectionObserver
  function (entries) {
    // Função a ser executada quando a interseção muda
    const ent = entries[0]; // Obtém a primeira entrada
    console.log(ent); // Imprime a entrada no console

    if (ent.isIntersecting === false) {
      // Se a seção hero não está intersectando
      document.body.classList.add("sticky"); // Adiciona a classe "sticky" ao corpo
    }

    if (ent.isIntersecting === true) {
      // Se a seção hero está intersectando
      document.body.classList.remove("sticky"); // Remove a classe "sticky" do corpo
    }
  },
  {
    // Opções
    // Na viewport
    root: null, // Define o root como null (viewport)
    threshold: 0, // Define o threshold como 0
    rootMargin: "-80px", // Define a margem do root como -80px
  }
);
obs.observe(sectionHeroEl); // Observa a seção hero

///////////////////////////////////////////////////////////
// Corrigindo a propriedade de gap do flexbox faltando em algumas versões do Safari
function checkFlexGap() {
  // Função para verificar o suporte ao gap do flexbox
  var flex = document.createElement("div"); // Cria um elemento div
  flex.style.display = "flex"; // Define o display como flex
  flex.style.flexDirection = "column"; // Define a direção do flex como coluna
  flex.style.rowGap = "1px"; // Define o gap da linha como 1px

  flex.appendChild(document.createElement("div")); // Adiciona um elemento div
  flex.appendChild(document.createElement("div")); // Adiciona um elemento div

  document.body.appendChild(flex); // Adiciona o elemento flex ao corpo
  var isSupported = flex.scrollHeight === 1; // Verifica se o scrollHeight é 1
  flex.parentNode.removeChild(flex); // Remove o elemento flex do pai
  console.log(isSupported); // Imprime o valor de isSupported no console

  if (!isSupported) document.body.classList.add("no-flexbox-gap"); // Se não for suportado, adiciona a classe "no-flexbox-gap" ao corpo
}
checkFlexGap(); // Chama a função checkFlexGap

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
