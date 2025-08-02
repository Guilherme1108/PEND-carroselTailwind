//criando um array de imagens com texto
const imgs = [
  ['img/puff.jpg', 'Local para descansar a mente'],
  ['img/mesaPingPong.jpg', 'Muita diversão e alegria'],
  ['img/plantaEntrada.jpg', 'Local onde aguardei para fazer a prova'],
];


let imgAtual = 0; /* variavel da imagem atual */
const carrossel = document.getElementById('carrossel'); /* constante que guarda as imagens */

function atualizarImagem() {
  carrossel.style.backgroundImage = `url(${imgs[imgAtual][0]})`; /* pega uma imagem da constante img */
  carrossel.setAttribute('texto-descricao', imgs[imgAtual][1]);
  imgAtual = (imgAtual + 1) % imgs.length; /* adiciona mais 1 ao imgAtual, fazendo mudar para a proxima imagem */
}                                          /* o operador % faz voltar para o inicio toda vez que acaba */

atualizarImagem(); // mostra a primeira imagem de imediato
setInterval(atualizarImagem, 3000);