let apiEndpoint = 'https://fakestoreapi.com/products';

fetch(apiEndpoint)

    .then(res=>res.json())
    .then(data=>{
      console.log(data[0].title);
      
      // let itemName;
      // itemName = document.createElement('h1');
      // itemName.innerText = data.id;
      // document.body.appendChild(itemName);
    
    
    
    
    
    
    })