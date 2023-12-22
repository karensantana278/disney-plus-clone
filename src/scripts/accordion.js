export function initAccordion(){
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaReposta);
    }

}

function abreOuFechaReposta(elemento){
    const classe = 'faq__questions__item--open';
    const elementoPai = elemento.target.parentNode;
    
    elementoPai.classList.toggle(classe);
}