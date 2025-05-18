// Função para mudar a cor da página de verde para roxo a cada 2 segundos
function changeColors() {
  const colors = ["#008000", "#800080"]; // Verde e Roxo
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % colors.length;
    document.documentElement.style.setProperty("--dynamic-color", colors[currentIndex]);
  }, 2000);
}

// Efeito de digitar no texto
function typeWriter() {
  const titulo = document.querySelector(".inicio h1, .projetos h1 ");
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


// apenas para o contato
// Atualiza o ano atual no rodapé
function atualizarAno() {
  const anoElemento = document.getElementById("current-year");
  if (anoElemento) {
    anoElemento.textContent = new Date().getFullYear();
  }
}

// apenas para o sobre mim
// Aviso quando clicam no link de download do currículo
function avisoDownload() {
  const downloadLink = document.getElementById("downloadLink");
  if (downloadLink) {
    downloadLink.addEventListener("click", function () {
      setTimeout(() => {
        const aviso = document.getElementById("downloadaviso");
        if (aviso) {
          aviso.classList.add("show");
          setTimeout(() => aviso.classList.remove("show"), 3000);
        }
      }, 500);
    });
  }
}

// Inicialização após o DOM carregar
document.addEventListener("DOMContentLoaded", function () {
  // Define cor inicial
  document.documentElement.style.setProperty("--dynamic-color", "#008000");

  // Inicia mudança de cores
  changeColors();

  // Inicia efeito de digitação
  typeWriter();

  // Atualiza o ano no rodapé
  atualizarAno();

  // Configura aviso de download
  avisoDownload();
});
