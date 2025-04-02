document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('.inicio h1');
    const textoOriginal = titulo.textContent;
    
    titulo.innerHTML = '<span class="cursor">|</span>'; // Cursor inicial
    let i = 0;
    
    function digitar() {
        if (i < textoOriginal.length) {
            titulo.innerHTML = 
                textoOriginal.substring(0, i + 1) + 
                '<span class="cursor">|</span>';
            i++;
            setTimeout(digitar, 80);
        } else {
            // Cursor final roxo
            titulo.innerHTML = textoOriginal + '<span class="cursor purple">|</span>';
        }
    }
    
    digitar();
});
document.getElementById('current-year').textContent = new Date().getFullYear(); // para atualizar o ano automatico