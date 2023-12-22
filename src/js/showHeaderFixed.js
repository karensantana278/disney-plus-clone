export function showHeaderFixed(){
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = this.window.scrollY;
        
        if(posicaoAtual < alturaHero){
            ocultaElementosDoHeader()
        }else{
            exibeElementosDoHeader()
        }
    })

    function ocultaElementosDoHeader(){
        const header = document.querySelector('.header');
        header.classList.add('header--hidden');
    }

    function exibeElementosDoHeader(){
        const header = document.querySelector('.header');
        header.classList.remove('header--hidden');
    }
}