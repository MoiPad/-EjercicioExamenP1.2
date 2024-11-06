
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data =>{

    let cards = `<div class="row row-cols-1 rows-cols-md3 g-4">`

    for(let user of data){
        cards += `
            <div class="card">
                <img src="${user.image}" alt="image-card" class="card-img-top" style="width: 30rem; ">
                <div class="card-body">
                    <h5 class="card-title">${user.title}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <strong>Precio: </strong>${user.price}
                        </li>
                        <li class="list-group-item">
                            <strong>Descripción: </strong>${user.description}
                        </li>
                        <li class="list-group-item">
                            <strong>Categoria: </strong>${user.category}
                        </li>
                    </ul>
                </div>
            </div>
        `
    }
    cards += `</div>`
    document.getElementById("card-list").innerHTML = cards;
})