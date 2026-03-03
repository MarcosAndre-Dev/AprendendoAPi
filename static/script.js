const botao = document.getElementById('btn-sortear');
const textoResultado = document.getElementById('resultado');

botao.addEventListener('click', async () => {
    textoResultado.innerText = "Consultando o Python..."; 
    
    try {
        // Bate na porta do FastAPI
        const resposta = await fetch('/api/sortear'); 
        
        // Pega o JSON que o Python devolveu
        const dados = await resposta.json();
        
        // Coloca a frase na tela
        textoResultado.innerText = `"${dados.frase}"`;
        
    } catch (erro) {
        textoResultado.innerText = "❌ Erro! O servidor FastAPI está rodando?";
    }
});