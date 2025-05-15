// Efeito de digitar no texto
function typeWriter() {
  const titulo = document.querySelector(".inicio h1");
  if (!titulo) return;

  const textoOriginal = titulo.textContent;
  titulo.innerHTML = "";

  let i = 0;
  function digitar() {
    if (i < textoOriginal.length) {
      titulo.innerHTML =
        textoOriginal.substring(0, i + 1) + '<span class="cursor">|</span>';
      i++;
      setTimeout(digitar, 80);
    } else {
      titulo.innerHTML = textoOriginal + '<span class="cursor">|</span>';
    }
  }
  digitar();
}

// Função para alternar entre verde e roxo com transição suave
function changeColors() {
  const colors = ["#008000", "#800080"]; // Verde e Roxo
  let currentIndex = 0;

  // Adiciona transição no CSS root
  document.documentElement.style.transition = "--dynamic-color 1s ease";

  setInterval(() => {
    currentIndex = (currentIndex + 1) % colors.length;
    document.documentElement.style.setProperty(
      "--dynamic-color",
      colors[currentIndex]
    );
  }, 2000); // Intervalo de 2 segundos
}

// Ano atual
document.getElementById("current-year").textContent = new Date().getFullYear();

// Seta para voltar para o topo
const backToTopButton = document.getElementById("topo");
if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Avisar quando baixarem o curriculo
const downloadLink = document.getElementById("downloadLink");
if (downloadLink) {
  downloadLink.addEventListener("click", function () {
    setTimeout(() => {
      const aviso = document.getElementById("downloadaviso");
      aviso.classList.add("show");
      setTimeout(() => aviso.classList.remove("show"), 3000);
    }, 500);
  });
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  // Define a cor inicial com transição
  document.documentElement.style.setProperty("--dynamic-color", "#008000");

  // Inicia a animação de cores
  changeColors();

  // Inicia o efeito de digitação
  typeWriter();
});
