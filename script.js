document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('.inicio h1');
    const textoOriginal = titulo.textContent; // pega o texto do html
    
    titulo.textContent = ''; // limpa o titulo
    let i = 0;
    
    function digitar() {
        if (i < textoOriginal.length) {
            titulo.textContent = textoOriginal.substring(0, i + 1); // Substitui o texto
            i++;
            setTimeout(digitar, 80); // Velocidade da digitação (100ms)
        }
    }
    
    digitar(); 
});