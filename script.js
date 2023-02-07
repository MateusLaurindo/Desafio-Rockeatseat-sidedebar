function clicou() {
  const menu = document.querySelector('nav');
  const botao = document.querySelector('button');
  const exit = document.querySelector('.info-saida');
  const logo = document.querySelector('.logo');
  const saida = document.querySelector('.saida');
  const texto1 = document.querySelector('.texto1');

  exit.classList.toggle('info-saida-mover');
  botao.classList.toggle('botao-mover');
  menu.classList.toggle('trocar');
  logo.classList.toggle('logo-real');
  saida.classList.toggle('saida-ativo');
  texto1.classList.toggle('texto-aparecer');
}

