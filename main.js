

// global variables that connect to each category in the navbar, div display, and API URL
const store = document.getElementById("store");
const cart = document.getElementById("cart");
const electronics = document.getElementById("electronics");
const jewelery = document.getElementById("jewelery");
const clothingMen = document.getElementById("clothingMen");
const clothingWomen = document.getElementById("clothingWomen"); 

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

// cart.addEventListener("click", () => {     //not sure how to do this one. bc the url has /products, I cannot just add /carts becuase it will not work
//   console.log(fakeStore('')); 
// });


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
    
    const fullCard = document.createElement('div');
    fullCard.className = 'card';

    const title = document.createElement('h1');
    const description = document.createElement('h3');
    const price = document.createElement('h3');
    const image = document.createElement('img')//do I need to create a new element for the photo?

    title.innerText = element.title;
    description.innerText = element.description;
    price.innerText = '$ ${element.price}'; //make sure that you are only showing price to the appropriate decimal place $0.00
    image.src= element.image;

    itemName.appendChild(title);
    itemDescription.appenedChild(description);
    itemPrice.appendChild(price);
  });

}

