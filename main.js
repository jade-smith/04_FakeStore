

// global variables that connect to each category in the navbar, div display, and API URL
// const store = document.getElementById("store");
// const cart = document.getElementById("cart");
// let electronics = document.getElementById("electronics");
// const jewelery = document.getElementById("jewelery");
// const clothingMen = document.getElementById("clothingMen");
// const clothingWomen = document.getElementById("clothingWomen"); 

let electronicsnav = document.getElementById("electronics");
console.log(electronicsnav);

const display = document.getElementById("display");
const url = 'https://fakestoreapi.com/products'; 

//async function 'fakeStore' with parameter 'endpoint'
async function fakeStore(endpoint) {
  let res = await fetch(url + endpoint); 
  let results = await res.json(); 
  console.log(results);
}

//onload method
window.onload = fakeStore("/");

//event listeners
// store.addEventListener("click", () => {        //not sure what to do here
//   fakeStore(??);
// });

// cart.addEventListener("click", () => {
//   fakeStore('/carts');
// });


// electronics.addEventListener("click", (e) => {
//   fakeStore('/category/electronics');
// });

// jewelery.addEventListener("click", () => {
//   fakeStore('/category/jewelery');
// });

// clothingMen.addEventListener("click", () => {
//   fakeStore("/category/men's clothing");
// });

// clothingWomen.addEventListener("click", () => {
//   fakeStore("category/women's clothing");
// });


function displayCards(){
  
}

