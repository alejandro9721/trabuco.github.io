
//.................Menu.................

const menu = document.getElementById('burger-menu');
menu.addEventListener('click', function(){
    document.getElementById('menu').classList.toggle('active');
    this.classList.toggle("close");
});

//..............Modo dark................

const btnsWitch = document.querySelector('#switch');
const fondo = document.querySelector('#wrapper');

btnsWitch.addEventListener('click', () => {
    fondo.classList.toggle('activo');
    btnsWitch.classList.toggle('activo');
});

//................ScrollUp.................

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
        buttonUp.style.transform = "scale(0)";
    }
};

buttonUp = document.getElementById("button-up");

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if(scroll > 1200){
        buttonUp.style.transform = "scale(1)";
    }
};

//................Scroll...................

let animado = document.querySelectorAll(".scroll-right");

function mostrarscroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++ ) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 350 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("scroll-animado");
        }
    }
}

window.addEventListener('scroll', mostrarscroll);

//..............Portafolio..............

(function(d){
    let tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-item'));
    let panels = Array.prototype.slice.apply(d.querySelectorAll('.panels-item'));
    d.getElementById('tabs').addEventListener('click', e => {
        if (e.target.classList.contains('tabs-item')) {
            let i = tabs.indexOf(e.target);
            tabs.map(tab => tab.classList.remove('active'));
            tabs[i].classList.add('active');
            panels.map(panel => panel.classList.remove('active'));
            panels[i].classList.add('active');
        }
    });
})(document);


