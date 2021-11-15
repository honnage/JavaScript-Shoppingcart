let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'Grey Tshirt 1',
        tag: 'greytshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey Tshirt 2',
        tag: 'greytshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey Tshirt 3',
        tag: 'greytshirt 1',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey Tshirt 4',
        tag: 'greytshirt 1',
        price: 15,
        inCart: 0
    }
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumder');

    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumder');

    productNumbers = parseInt(productNumbers);
    
    if( productNumbers){
        localStorage.setItem('cartNumder', productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;

    } else{
        localStorage.setItem('cartNumder', 1);
        document.querySelector(".cart span").textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();