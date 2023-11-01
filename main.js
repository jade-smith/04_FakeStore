

// global variables that connect to each category in the navbar, div display, and API URL
const store = document.getElementById("store");
const cart = document.getElementById("cart");
const electronics = document.getElementById("electronics");
const jewelery = document.getElementById("jewelery");
const clothingMen = document.getElementById("clothingMen");
const clothingWomen = document.getElementById("clothingWomen"); 
let cartItems = [];

const display = document.getElementById("display");
const url = 'https://fakestoreapi.com/products'; 

//async function 'fakeStore' with parameter 'endpoint'
async function fakeStore(endpoint) {     //something about this function is throwing an error in the console
  let res = await fetch(url + endpoint); 
  let results = await res.json(); 
  displayCards(results)
}


//onload method
window.onload = fakeStore("/");

//event listeners
store.addEventListener("click", () => {        
  fakeStore('/');
});

cart.addEventListener("click", () => {     //not sure how to do this one. bc the url has /products, I cannot just add /carts becuase it will not work
  console.log(fakeStore('')); 
});


electronics.addEventListener("click", () => {
  console.log(fakeStore('/category/electronics'));
});

jewelery.addEventListener("click", () => {
  console.log(fakeStore('/category/jewelery'));
});

clothingMen.addEventListener("click", () => {
  console.log(fakeStore("/category/men's clothing"));
});

clothingWomen.addEventListener("click", () => {
  console.log(fakeStore("/category/women's clothing"));
});

function displayCards(products){  //what variable should I be calling into this function if any?

  products.forEach(element => {  // element is going to be the individual product object within the array of producs, how do I properly adress this?
    
  const card = document.createElement('div');
  const image = document.createElement('img');
  const body = document.createElement('div');
  const item = document.createElement('div');
  const price = document.createElement('div');
  const description = document.createElement('button');
  const cart = document.createElement('button');
  
  image.src = element.image;
  item.innerText = element.title;
  description.innerHTML = `<div class="accordian-item">
  <h2 class="accordian-header">
  <button class="accordian-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
  Description
  </button>
  </h2>
  <div id="collapseOne" class="acordian-collapse collapse" data-bs-parent="#accordianExample">
  <div class="accordian-body">
  ${element.description}
  </div>
  </div>
  </div>
  `;
  price.innerHTML =`<div class="accordian-item">
  <h2 class="accordian-header">
  <button class="accordian-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
  Price
  </button>
  </h2>
  <div id="collapseTwo" class="acordian-collapse collapse" data-bs-parent="#accordianExample">
  <div class="accordian-body">
  ${element.price}
  </div>
  </div>
  </div>
  `;
  cart.innerHTML= '<button type="button" class="btn btn-info">Add to Cart</button>';

  display.appendChild(card);
  card.appendChild(image);
  card.appendChild(body);
  body.appendChild(item);
  body.appendChild(description);
  body.appendChild(price);
  body.appendChild(cart);
    
  }); 
}


function Cart(item){
  cartItems.push(item);
  return(`${item.title} added to cart`)
}

function updateCart(){
  inCart = false;
  const itemsInCart = document.getElementById('cartItems')
  itemsInCart.innerHTML = '';

  cartItems.forEach(element => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.textContent = item.title;

    itemsInCart.appendChild(cartItem);
  });

  openCart();

  function openCart (){
    openCart = true;
    updateCart();
    const cartModal = new boostrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
  }
}
