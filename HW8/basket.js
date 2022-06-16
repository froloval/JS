"use strict"

const basketCountEl = document.querySelector('.carticonWrap span');
const basketTotalValue = document.querySelector('basketTotalValue');
const basketEl = document.querySelector('.basket')

document.querySelector('.cardIconWrap').addEventListener('clikc', () => {
    basketEl.classList.toggle('hidden')
});

const basket = {};
document.querySelector('.featuredItems').addEventListener('click', event => {
    if (!event.target.classList.closest('addToCart')) {
        return;
    }
})
