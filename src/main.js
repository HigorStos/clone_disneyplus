document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
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
    const toggleClass = 'faq__questions__item--is-open';
    const element = e.target.parentNode;

    element.classList.toggle(toggleClass);
}