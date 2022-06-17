"use strict"

const basketCounterEl = document.querySelector('.carticonWrap span');
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
    const featuredItem = event.target.closest('featuredItem');
    const id = +featuredItem.dataset.id;
    const name = featuredItem.dataset.name;
    const price = +featuredItem.dataset.price;
    addToCart(id, name, price);
});
function addToCart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = { id, name, price, count: 0 };
    }
    basket[id].count++;
    basketCounterEl.textContent = getTotalBasketCount().toString();
    basketTotalValue.textContent = getTotalBasketPrise().toFixed(2);
    renderProductInBasket(id);

};
function getTotalBasketCount() {
    // return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
    const productArr = Object.values(basket);
    let count = 0;
    for (const product of productArr) {
        count += product.count;
    }
    return count;
}
function getTotalBasketPrise() {
    return Object.values(basket).reduce((acc, product) => acc + product.count * product.price, 0)
}
function renderProductInBasket(id) {
    const basketRowEl = basketEl
        .querySelector('.basketRow[data-productId="${id}"]');
    if (!basketRowEl) {
        renderNewProductInBasket(id);
        return;
    }
    basketRowEl.querySelector('.productCount').textContent = basket[id].count;
    basketRowEl.querySelector('.productTotalRow')
        .textContent = basket[id].count * basket[id].price;
}
function renderNewProductInBasket(productId) {
    const productRow =
        <div class="basketRow" data-productId="${productId}">
            <div>${basket[productId].name}</div>
            <div>
                <span class="productCount">${basket[productId].count}</span>
            </div>
            <div>${basket[productId].price}</div>
            <div>
                $<span class="productTotalRow">
                    ${(basket[productId].price * basket[productId].count).toFixed(2)}
                </span>
            </div>
        </div>

}
