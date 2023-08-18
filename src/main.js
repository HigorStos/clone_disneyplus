document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const currentPosition = window.scrollY;

        if (currentPosition > heroHeight) {
            showHeaderElements();
        } else {
            hideHeaderElements();
        }
    })
    
    // Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const target = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${target}]`);

            removeActiveTab();
            tab.classList.add('shows__list--is-active');
            
            removeActiveButton();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', toggleAnswer);
    }
})

function removeActiveTab() {
    const tabs = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('shows__list--is-active');
    }
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function toggleAnswer(e) {
    const classe = 'faq__questions__item--is-open';
    const element = e.target.parentNode;

    element.classList.toggle(classe);
}

function hideHeaderElements() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}

function showHeaderElements() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}