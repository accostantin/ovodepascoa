const products = [
    {
        name: "Ovo de Páscoa Sonic Chocolate ao Leite 80g - Delice",
        price: 40.00,
        image: "./img/7481995808_1SZ.webp"
    },
    {
        name: "Ovo de Páscoa Lacta Hotwheels Chocolate ao Leite 166g",
        price: 50.00,
        image: "./img/56135132_1SZ.webp"
    }, 
    {
        name: "Ovo de Páscoa Hello Kitty Chocolate ao Leite 80g - Delice",
        price: 40.00,
        image: "./img/68550656110_65764331b87caf0ca0f2784b3620ada0.webp"
    }, 
    {
        name: "Ovo de Páscoa Lacta Barbie Skatista Divertido e Saboroso Sortido 166g",
        price: 50.00,
        image: "./img/7622210547880_1 -1-.webp"
    }
]

products.forEach((produtos)=> {
    const box = document.createElement("li");
    box.classList.add("box");
    box.innerHTML = `
        <img class="ovo" src="${produtos.image}" alt="Produto">
        <h2 class="eggtitle"> ${produtos.name}</h2>
        <div class="container"> 
        <p class="preco" >R$ ${produtos.price.toFixed(2)}</p>
        <button class="btn">Comprar</button>
        </div>
    `;

    const lista = document.getElementById("lista");
    lista.appendChild(box)

}) 

