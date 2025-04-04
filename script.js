// efeito de digitar no texto
function typeWriter() {
    const titulo = document.querySelector('.inicio h1');
    if (!titulo) return;

    const textoOriginal = titulo.textContent;
    titulo.innerHTML = '';

    let i = 0;
    function digitar() {
        if (i < textoOriginal.length) {
            titulo.innerHTML = textoOriginal.substring(0, i + 1) + '<span class="cursor">|</span>';
            i++;
            setTimeout(digitar, 80);
        } else {
            titulo.innerHTML = textoOriginal + '<span class="cursor purple">|</span>';
        }
    }
    digitar();
}

// ano atual
document.getElementById('current-year').textContent = new Date().getFullYear(); 


// seta para voltar para o topo
const backToTopButton = document.getElementById('topo');
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// avisar quando baixarem o curriculo
const downloadLink = document.getElementById('downloadLink');
if (downloadLink) {
    downloadLink.addEventListener('click', function () {
        setTimeout(() => {
            const aviso = document.getElementById('downloadaviso');
            aviso.classList.add('show');
            setTimeout(() => aviso.classList.remove('show'), 3000);
        }, 500);
    });
}
document.addEventListener('DOMContentLoaded', typeWriter);

