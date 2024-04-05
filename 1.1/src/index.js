//variables 
let car = {
    idproduct: "",
    img: "",
    description: "",
    price: 0,
    quantity: 0,
}
let totalprice = 0
let updatedImage
let updatedDescription
const products = document.getElementsByClassName("product")
const spanTotalPrice = document.getElementById("total-price")
const formatPeso = new Intl.NumberFormat(
    "es-CO",
    {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    }
)



//constructor clase car
function addToCar(idproduct, img, description, price, quantity,) {
    car.idproduct = idproduct
    car.img = img
    car.description = description
    car.price = parseInt(price)
    car.quantity = parseInt(quantity)
}


//iterar sobre productos y agregar a claser car 
for (let index = 0; index < products.length; index++) {
    products[index].onclick =
        function () {
            this.dataset.quantity++
            addToCar(this.dataset.idproduct, this.dataset.img, this.dataset.description, this.dataset.price, this.dataset.quantity)
            totalprice += car.price
            spanTotalPrice.innerHTML = `Total  ${formatPeso.format(totalprice)}`
            if (this.dataset.quantity <= 1) {
                let compra = document.createElement("div")
                compra.setAttribute("id", car.idproduct)
                document.getElementById("span-shoppingcar").appendChild(compra)
                addElements(this.dataset.quantity)
            } else {
                addElements()
            }
        }

}



function updater() {
    //add image to car
    updatedImage = document.createElement("img")
    updatedImage.setAttribute("src", car.img)
    document.getElementById(car.idproduct).appendChild(updatedImage)
    // -
    updatedDescription = document.createElement("button")
    updatedDescription.setAttribute("class", "menos")
    updatedDescription.setAttribute("id", "menos" + car.idproduct)
    updatedDescription.setAttribute("onclick", "subtract(this.id)")
    updatedDescription.innerHTML = "-"
    document.getElementById(car.idproduct).appendChild(updatedDescription)
    //add + to car
    updatedDescription = document.createElement("button")
    updatedDescription.setAttribute("class", "mas")
    updatedDescription.setAttribute("id", "mas" + car.idproduct)
    updatedDescription.setAttribute("onclick", "add(this.id)")
    updatedDescription.innerHTML = "+"
    document.getElementById(car.idproduct).appendChild(updatedDescription)
    //word 
    updatedDescription = document.createElement("p")
    updatedDescription.setAttribute("class", "cantidad")
    updatedDescription.innerHTML = "Cantidad :"
    document.getElementById(car.idproduct).appendChild(updatedDescription)



    //add quantity to car
    updatedDescription = document.createElement("p")
    updatedDescription.setAttribute("class", "cantidad")
    updatedDescription.innerHTML = car.quantity
    document.getElementById(car.idproduct).appendChild
        (updatedDescription)


    //Add product a car
    updatedDescription = document.createElement("h2")
    updatedDescription.innerHTML = "Producto: " + car.description
    document.getElementById(car.idproduct).appendChild(updatedDescription)
    //des
    updatedDescription = document.createElement("p")
    updatedDescription.innerHTML = car.description
    document.getElementById(car.idproduct).appendChild(updatedDescription)
    //price

    updatedDescription = document.createElement("h3")
    updatedDescription.innerHTML = "precio: " + formatPeso.format(car.price)
    document.getElementById(car.idproduct).appendChild(updatedDescription)



}
function addElements() {
    if (car.quantity != 1) {
        for (let index = 0; index < 8; index++) {
            document.getElementById(car.idproduct).removeChild(document.getElementById(car.idproduct).childNodes[0])
        }
    }
    updater()
}


function deleteElements() {
    if (car.quantity == 0) {
        document.getElementById("span-shoppingcar").removeChild(document.getElementById(car.idproduct));
    } else {
        for (let index = 0; index < 8; index++) {
            document.getElementById(car.idproduct).removeChild(document.getElementById(car.idproduct).childNodes[0])

        }
        updater()
    }
}


function add(button) {
    let index = 0
    for (index = 0; index < products.length; index++) {
        if (document.getElementById(button).parentNode.id == products[index].dataset.idproduct) {
            break
        }
    }

    let newData = products[index].dataset
    newData.quantity++
    addToCar(newData.idproduct, newData.img, newData.description, newData.price, newData.quantity)
    addElements(car.quantity)
    totalprice += car.price
    spanTotalPrice.innerHTML = "Total: " + formatPeso.format(totalprice)

}
function subtract(button) {
    let index = 0
    for (index = 0; index < products.length; index++) {
        if (document.getElementById(button).parentNode.id == products[index].dataset.idproduct) {
            break
        }
    }

    let newData = products[index].dataset
    newData.quantity--
    addToCar(newData.idproduct, newData.img, newData.description, newData.price, newData.quantity)
    deleteElements(car.quantity)
    totalprice -= car.price
    spanTotalPrice.innerHTML = "Total: " + formatPeso.format(totalprice)

}






