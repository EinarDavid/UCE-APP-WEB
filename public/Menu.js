var menu = document.getElementById('ColorMenu');
var texto = document.getElementById('texto');
//alert(window.pageYOffset);
var altura = texto.offsetTop;

window.addEventListener('scroll', function(){
    if(window.pageYOffset > altura-80){
        menu.classList.add('ColordelMenu');
        
    }
    else{
        
        menu.classList.remove('ColordelMenu');
    }
});
