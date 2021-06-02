<h1 align="center"> 🚀 Disney-clone 🚀 </h1>

<p align="center"> Projeto desenvolvido no bootcamp da Digital Innovation One - Disney+ Clone no lugar do projeto NetFlix Clone, afim de me desafiar em um projeto diferente
mas aplicando conhecimentos aprendidos!</p></br>

<h3> 📌 Barra de navegação versão inicial </h3>
<p align="center">
<img alt="App Demo" src="https://j.gifs.com/NOkNPK.gif">
</p>

<h4> 📝 Conhecimentos adquiridos: </h4>

- Utilização de estrutura semântica com a tag ```header``` 
- Utilização do ```border-box``` para organização dos conteúdos na nav
- Utilização das propriedades ```::before``` e ```:hover::before``` para criar o efeito da barra ao passar o mouse sobre os items da nav

<pre><code>
header nav a.estilo::before {
    content: "";
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    position: absolute;
    left: 0;
    bottom: -0.4em;
    

    height: 0.2em;
    width: 100%;

    background-color: var(--principal);
    visibility: hidden;
    
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transform-origin:0 100% 0;

    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

header nav a.estilo:hover::before {
    visibility: visible;
    
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    transform-origin:0 100% 0;

}
</code></pre>

- As propriedades ```transform: scaleX(1);``` e ```transform-origin:0 100% 0;``` dão o efeito da barra deslizar da esquerda para a direita! Você pode ver alguns exemplos
[aqui](https://codepen.io/vineethtrv/pen/XKKEgM) !
- Utilizado Vendor Prefixes ```-webkit``` pode ser estudado pelo [link](https://developer.mozilla.org/pt-BR/docs/Glossary/Vendor_Prefix) .


<h3> 📌 Carousel principal versão inicial </h3>

<p align="center">
<img alt="App Demo carrousel" src="https://j.gifs.com/K8rMgY.gif">
</p>

<h4> 📝 Conhecimentos adquiridos: </h4>

- Utilizado o [slick](https://kenwheeler.github.io/slick/) para criar o carousel aplicando jquery.
<pre><code>
$(document).ready(function(){
  $('.main-carousel').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });
});
</code></pre>

<h4> 📍 Melhorias </h4>

- [ ] Alterar background de acordo com o filme;
- [ ] Adicionar efeito hover ao passar o mouse sobre o card;
- [ ] Adicionar setas para rolar manualmente;
- [ ] Adicionar animação no nome do filme mostrado do lado esquerdo.

