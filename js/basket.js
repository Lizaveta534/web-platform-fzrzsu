// Open basket function
function shoppingCartOpen() {
  const parent = document.body;
  const reference = document.querySelector('.header');
  document.body.style = 'overflow: hidden';

  // basket render //

  const shopping = document.createElement('div');
  shopping.className = 'shopping';

  const shoppingCart = document.createElement('div');
  shoppingCart.classList.add('shopping-cart');
  shoppingCart.classList.add('shopping__shopping-cart');
  shopping.appendChild(shoppingCart);

  const shoppingCartHeader = document.createElement('div');
  shoppingCartHeader.classList.add('cart-header');
  shoppingCart.appendChild(shoppingCartHeader);

  const shoppingCartHeaderTitle = document.createElement('p');
  shoppingCartHeaderTitle.classList.add('cart-header__title');
  shoppingCartHeaderTitle.textContent = 'Корзина';
  shoppingCartHeader.appendChild(shoppingCartHeaderTitle);

  const shoppingCartHeaderImg = document.createElement('img');
  shoppingCartHeaderImg.src =
    'https://img.icons8.com/material-rounded/24/ffffff/multiply--v1.png';
  shoppingCartHeaderImg.classList.add('cart-header__img');
  shoppingCartHeaderImg.addEventListener('click', () => {
    const parent = document.body;
    console.log(parent);
    parent.removeChild(shopping);
    document.body.style = 'overflow-y: scroll';
  });
  shoppingCartHeader.appendChild(shoppingCartHeaderImg);

  const shoppingCartList = document.createElement('div');
  shoppingCartList.classList.add('cart-list');
  shoppingCartList.classList.add('shopping-cart__cart-list');
  shoppingCart.appendChild(shoppingCartList);

  const shoppingCartFooter = document.createElement('div');
  shoppingCartFooter.classList.add('cart-footer');
  shoppingCart.appendChild(shoppingCartFooter);

  const shoppingCartFooterPrice = document.createElement('div');
  shoppingCartFooterPrice.classList.add('cart-footer-price');
  shoppingCartFooter.appendChild(shoppingCartFooterPrice);

  const shoppingCartFooterPriceLine = document.createElement('hr');
  shoppingCartFooterPriceLine.classList.add('cart-footer-price__line');
  shoppingCartFooterPrice.appendChild(shoppingCartFooterPriceLine);

  const shoppingCartFooterPriceText = document.createElement('p');
  shoppingCartFooterPriceText.textContent = '0$';
  shoppingCartFooterPriceText.classList.add('cart-footer-price__text');
  shoppingCartFooterPrice.appendChild(shoppingCartFooterPriceText);

  const shoppingCartFooterButton = document.createElement('div');
  shoppingCartFooterButton.classList.add('cart-footer-button');
  shoppingCartFooter.appendChild(shoppingCartFooterButton);

  const shoppingCartFooterButtonLine = document.createElement('hr');
  shoppingCartFooterButtonLine.classList.add('cart-footer-button__line');
  shoppingCartFooterButton.appendChild(shoppingCartFooterButtonLine);

  const shoppingCartFooterButtonButton = document.createElement('button');
  shoppingCartFooterButtonButton.type = 'submit';
  shoppingCartFooterButtonButton.textContent = 'Купить';
  shoppingCartFooterButtonButton.classList.add('cart-footer-button__button');
  shoppingCartFooterButtonButton.addEventListener('click', () => {
    const parent = document.body;
    console.log(parent);
    parent.removeChild(shopping);
    document.body.style = 'overflow-y: scroll';
  });
  shoppingCartFooterButton.appendChild(shoppingCartFooterButtonButton);

  // end of basket render //

  let shop = parent.insertBefore(shopping, reference);
  let sum = 0;
  loadContent(sum);
}

function loadContent(sum) {
  cart.forEach((product) => {
    const parent = document.querySelector('.cart-list');
    const template = document.querySelector('#cart-product');
    const newItem = template.content.cloneNode(true);
    const productCountPrice = product.price * product.count;

    const productName = newItem.querySelector('.cart-product__name');
    const productCount = newItem.querySelector('.cart-product__count');
    const productPrice = newItem.querySelector('.cart-product__price');

    productName.innerText = product.name;
    productCount.innerText = `x${product.count}`;
    productPrice.innerText = `${productCountPrice}$`;

    sum += productCountPrice;

    parent.appendChild(newItem);
  });

  const totalprice = document.querySelector('.cart-footer-price__text');
  totalprice.innerText = `${sum}$`;
}
