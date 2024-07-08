let product = {
    data: [

        {
            productname: "Regular white T-shirt",
            category: "topwear",
            price: "300",
            image: "download.jpg",
        },
        {
            productname: "beige short shirt",
            category: "bottomwear",
            price: "400",
            image: "bottom.jpg",
        },
        {
            productname: "Sporty Smart watch",
            category: "watch",
            price: "200",
            image: "sporty.jpg",
        },
        {
            productname: "Basic knitted top",
            category: "topwear",
            price: "99",
            image: "img7.jpg",
        },
        {
            productname: "Black leather Jacket",
            category: "jacket",
            price: "120",
            image: "jacket2.jpg",
        },
        {
            productname: "Stylish Pink tousers",
            category: "bottomwear",
            price: "220",
            image: "bottom3.jpg",
        },
        {
            productname: "Brown mens Jacket",
            category: "jacket",
            price: "180",
            image: "jacker1.jpg",
        },
        {
            productname: "Comfy Gray Pants",
            category: "bottomwear",
            price: "420",
            image: "bottom2.jpg",
        },
    ],
};

for (let i of product.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    let imgcontainer = document.createElement("div");
    imgcontainer.classList.add("ingcontainer");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgcontainer.appendChild(image);
    card.appendChild(imgcontainer);
    //  document.getElementById("products").appendChild(card);
    //container

    let container = document.createElement("div");
    container.classList.add("container");

    //product name

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productname.toUpperCase();
    container.appendChild(name);
    card.append(container);


    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}


//parameter passed from button

function filterProduct(value) {
    let button = document.querySelectorAll(".buttonvalue");
    button.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });
    //select all cards
let element=document.querySelectorAll(".card");
element.forEach((element)=>{
    if(value=="all"){
        element.classList.remove("hide");

    }
    else{
        if(element.classList.contains(value)){
            element.classList.remove("hide");

        }
        else{
            element.classList.add("hide");
        }
    }
});


}
document.getElementById("search").addEventListener("click",()=>{
    let searchinput=document.getElementById("search-input").value;
    let elements=document.querySelectorAll(".product-name");
    let cards=document.querySelectorAll(".card");

    elements.forEach((elements,index)=>{
        if(elements.innerText.includes(searchinput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    
});
},







//initially display all produt
window.onload=()=>{
    filterProduct("all");
}
)
