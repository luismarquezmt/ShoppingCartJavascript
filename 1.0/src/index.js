//variables 
let totalprice = 0
let updatedImage
let updatedDescription
let products = document.getElementsByClassName("product")

let spanTotalPrice = document.getElementById("total-price")
let cart
let carts = []
let dataProducts
const formatPeso = new Intl.NumberFormat(
    "es-CO",
    {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    }
)

//constructor clase cart
class shoppingCart {
    constructor(idproduct, img, description, price, quantity, mas) {
        this.idproduct = idproduct
        this.img = img
        this.description = description
        this.price = parseInt(price)
        this.quantity = parseInt(quantity)
        this.mas = mas
    }
}


//itera sobre la longitud de los productos en el HTML 
for (let index = 0; index < products.length; index++) {
    //dataset : permite incorporar atributos de datos personalizados en todos los elementos HTML.
    const element = products[index].dataset;
    cart = new shoppingCart(element.idproduct, element.img, element.description, element.price, element.quantity, element.mas)
    carts.push(cart)
    createElement("div", "id", element.idproduct, "span-shoppingcar")
    updater()
}



//cada vez que se toca un icono crea un div con los datos del objeto
function updater() {
    for (let index = 0; index < products.length; index++) {
        products[index].onclick = function () {
            carts[index].quantity++
            totalprice += carts[index].price

            dataProducts = ` <div id="spanProducts">
    <img src=${carts[index].img} alt="">
        <h2> ${carts[index].description}</h2>
        <p>Cantidad:</p>
        <button id="botonmenos${carts[index].idproduct}" onclick="updaterSubtract(${carts[index].idproduct})">-</button>
        <p> ${carts[index].quantity}</p>
        <button id="botonmas${carts[index].idproduct}" onclick="updaterPlus(${carts[index].idproduct})">+</button>
        <p>price: ${formatPeso.format((carts[index].price * carts[index].quantity))}</p>
    </div>`

            document.getElementById(carts[index].idproduct).innerHTML = dataProducts
            spanTotalPrice.innerHTML = "A Pagar: " + formatPeso.format(totalprice)
        }
    }
}

//funcion sumar del boton sumar
function updaterPlus(idproduct) {
    for (let index = 0; index < carts.length; index++) {
        if (idproduct.id === carts[index].idproduct) {
            carts[index].quantity++
            totalprice += carts[index].price
            dataProducts = ` <div id="spanProducts">
        <img src=${carts[index].img} alt="">
            <h2> ${carts[index].description}</h2>
            <p>Cantidad:</p>
            <button id="botonmenos${carts[index].idproduct}" onclick="updaterSubtract(${carts[index].idproduct})">-</button>
            <p> ${carts[index].quantity}</p>
            <button id="botonmas${carts[index].idproduct}" onclick="updaterPlus(${carts[index].idproduct})">+</button>
            <p>price: ${formatPeso.format((carts[index].price * carts[index].quantity))}</p>
        </div>`
            document.getElementById(carts[index].idproduct).innerHTML = dataProducts
            spanTotalPrice.innerHTML = "A Pagar: " + formatPeso.format(totalprice)
        }
    }
}


//funcion restar del boton restar 
function updaterSubtract(idproduct) {
    for (let index = 0; index < carts.length; index++) {
        if (idproduct.id === carts[index].idproduct) {
            carts[index].quantity--
            totalprice -= carts[index].price
            
            if (carts[index].quantity === 0) {
                document.getElementById(carts[index].idproduct).innerHTML = ""
                spanTotalPrice.innerHTML = "A Pagar: 0 $" 

            } else {
                dataProducts = ` <div id="spanProducts">
        <img src=${carts[index].img} alt="">
            <h2> ${carts[index].description}</h2>
            <p>Cantidad:</p>
            <button id="botonmenos${carts[index].idproduct}" onclick="updaterSubtract(${carts[index].idproduct})">-</button>
            <p> ${carts[index].quantity}</p>
            <button id="botonmas${carts[index].idproduct}" onclick="updaterPlus(${carts[index].idproduct})">+</button>
            <p>price: ${formatPeso.format((carts[index].price * carts[index].quantity))}</p>
      </div>`

                document.getElementById(carts[index].idproduct).innerHTML = dataProducts
                spanTotalPrice.innerHTML = "A Pagar: " + formatPeso.format(totalprice)
            }
        }
    }
}

//funcion que crea un elemento tomando un elemento del html  
function createElement(whatElement, attribute, what, appendWhere) {
    let createElemen = document.createElement(whatElement)
    createElemen.setAttribute(attribute, what)
    document.getElementById(appendWhere).appendChild(createElemen)
}





