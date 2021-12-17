const ipadNode = document.querySelector('#main__shop > div:nth-child(6)');
const iphoneNode = document.querySelector('.main__list');

const cartNode = document.querySelector('.cart-list');

const cart = [];
let sum = 0;
let counter = 0;

class Card {
  constructor(product) {
    const template = document.getElementById('product-template');
    const content = document.importNode(template.content, true);

    this.name = content.querySelector('.product-description__title');
    this.desc = content.querySelector('.product-description__subtitle');
    this.img = content.querySelector('.product-img');
    this.price = content.querySelector('.product-buying__text');
    this.addButton = content.querySelector('.product-buying__button');

    this.name.innerHTML = product.name;
    this.desc.innerHTML = product.description;
    this.price.innerHTML = `${product.price}$`;
    this.img.src = product.imgSource;
    this.img.alt = `Image of ${product.name}`;

    this.addButton.onclick = () => this.addToCart(product);

    if (product.name.includes('IPHONE')) {
      iphoneNode.appendChild(content);
    } else if (product.name.includes('IPAD')) {
      ipadNode.appendChild(content);
    }
  }

  addToCart(product) {
    sum += product.price;
    counter++;
    if (counter === 1) {
      //console.log('запушено!');
      cart.push(product);
    } else {
      this.checkDuplicate(product);
    }
    updateMainInfo(sum, counter);
  }

  checkDuplicate(product) {
    let newName = product.name;
    let newDesc = product.description;
    let isDuplicate = false;
    //console.log(`\t New: ${newName}, ${newDesc}`);

    for (let i = 0; i < cart.length; i++) {
      //console.log(`i=${i}, ${cart[i].name}, ${cart[i].description}`);
      if (cart[i].name === newName) {
        if (cart[i].description === newDesc) {
          cart[i].count++;
          //console.log('Совпадение!');
          isDuplicate = true;
          break;
        }
      }
    }

    if (!isDuplicate) {
      cart.push(product);
    }
  }
}

function updateMainInfo(value, counter) {
  // cost on basket //
  let target = document.querySelector('.basket__text');
  target.innerText = `${value} $`;
  //                //

  // popup counter //
  let parent = document.querySelector('.basket__link');
  let div = document.createElement('div');
  div.classList.add('popup-counter');
  if (counter === 1) {
    div.innerHTML = counter;
    parent.appendChild(div);
  } else {
    let target = document.querySelector('.popup-counter');
    target.innerText = counter;
  }
  //               //
}

// load cards //

productArray.forEach((product) => {
  new Card(product);
});

// end of load cards //
