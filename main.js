let carts = document.querySelectorAll('.add-cart');

let products =[
    {
    name : 'Fowl',
    tag : 'fowl',
    price : 2000,
    inCart : 0
},

{
    name : 'Duck',
    tag : 'duck',
    price : 3000,
    inCart : 0
},

{
    name : 'Indian Chiken',
    tag : 'indian',
    price : 1200,
    inCart : 0
},

{
    name : 'Pigeon',
    tag : 'pigeon',
    price : 800,
    inCart : 0
},

{
    name : 'Goose',
    tag : 'Neugierige_Hausgans',
    price : 4000,
    inCart : 0
},

{
    name : 'Brazilian',
    tag : 'brazilian',
    price : 1300,
    inCart : 0
},
{
    name : 'Duck',
    tag : 'blue duck',
    price : 2000,
    inCart : 0
},
{
    name : 'Queil',
    tag : 'queil m',
    price : 3000,
    inCart : 0
},
{
    name : 'Indian Chicken',
    tag : 'indian',
    price : 1500,
    inCart : 0
},
{
    name : 'Guinea_fowlGuinea fowl',
    tag : 'Guinea_fowl',
    price : 3500,
    inCart : 0
},
{
    name : 'Pigeon',
    tag : 'pigeon',
    price : 700,
    inCart : 0
},
{
    name : 'Queil',
    tag : 'queil m',
    price : 3100,
    inCart : 0
},

];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    }) 
}
function onLoadCartNumbers(){

    let productNumber = localStorage.getItem('cartNumbers');

    if (productNumber){
        document.querySelector('.cart span').textContent = productNumber;
    }
    
}

function cartNumbers(products){

    

        let productNumber = localStorage.getItem('cartNumbers');

        productNumber = parseInt(productNumber);

        if(productNumber){

            localStorage.setItem('cartNumbers',productNumber+1);

            document.querySelector('.cart span').textContent = productNumber + 1;
        }
        else{
            localStorage.setItem('cartNumbers',1);
            document.querySelector('.cart span').textContent = 1;
    }

    setItems(products);  
}

function setItems(products){

    let cartItems = localStorage.getItem("productsInCart");

    cartItems = JSON.parse(cartItems);

    if (cartItems != null){

        if(cartItems[products.tag] == undefined){

            cartItems = {
                ...cartItems,
                [products.tag]:products
            }
        }
        cartItems[products.tag].inCart += 1;
    }
    else{
    products.inCart=1;

     cartItems = {
        [products.tag]: products
     }
    }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}
function totalCost(products){

    // console.log("The product price is:", products.price);
    let cartCost = localStorage.getItem("totalCost",totalCost);
    
    console.log("My cartCost Cost is:", cartCost);
    if (cartCost !=null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost+products.price);
    }else{
        localStorage.setItem("totalCost",products.price);
    }
}
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);  
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost",totalCost);
    console.log(cartItems);
    if (cartItems && productContainer){
        
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class ="cartProducts">
            <div class = "product">
            <img src="./images/${item.tag}.jpg">
            <span>${item.name}</span>
            </div>
            <div class = "cprice">KSH:${item.price}.00</div> 
            <div class = "quantity">${item.inCart}</div>
            <div class = "total">KSH:${item.inCart*item.price}.00</div>
            </div>
            `;
        })
    
        productContainer.innerHTML +=`
        <hr><div class="basketTotalContainer">
             <h4 class ="basketTotalTitle">
                    Basket Total
                    </h4>
            <h4 class ="basketTotal">
            KSH:${cartCost}.00
            </h4>
            </div>
            `
    }
}
onLoadCartNumbers();
displayCart();