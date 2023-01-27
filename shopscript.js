let cart = []

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})

    console.log(cart)
    //etter å ha lagt til et produkt; oppdater handlelistevisning
    renderCart()
    //Oppdatere label med riktig antall produkter
    document.querySelector("#cartview").classList.remove("hidden")
    document.querySelector("#cart .label").innerHTML = cart.length
}

function renderCart() {
    //Tom variabel for å bygge HTML til produkter
    let listHTML = ""
    let totalPrice = 0
    //Gå gjennom cart-arrayen, lag <li> for hvert produkt
    cart.map((prod, product) => listHTML += `<li>
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice}</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button class="delete" onClick="deleteProduct(${product})">X</button>
</li>`)

    //Bruke en selector for å finne riktig <ul>, og skrive inn listHTML
    document.querySelector("#cartview ul").innerHTML = listHTML

    cart.map(price => totalPrice += (price.productPrice))

    document.querySelector("#total").innerHTML = totalPrice

    if (cart.length == 0) {
        let tomCart = ""
        tomCart += `<li>Du har ingen varer i handlevognen</li>`
        document.querySelector("#cartview ul").innerHTML = tomCart
        }
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}

function deleteProduct(product){
    cart.splice(product, 1)
    renderCart()
    document.querySelector("#cart .label").innerHTML = cart.length
}