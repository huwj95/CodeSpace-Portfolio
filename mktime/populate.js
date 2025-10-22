let stock = [
    {
        name: 'Steve',
        price: 100,
        tagline: "it's a really good watch you guys",
        imageUrl: './media/157-industries-aKrMVLlaPFY-unsplash.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis tempor urna. Donec faucibus nisl et risus mattis suscipit. Maecenas et eros ipsum. Sed mattis libero vitae mi dignissim congue vitae eget massa. Pellentesque eget metus mi. Suspendisse lacus odio, luctus a purus non, auctor volutpat leo. In eu velit ligula.'
    },
    {
        name: 'polex',
        price: 100,
        tagline: 'better than a rolex',
        imageUrl: './media/pexels-pixabay-47856.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis tempor urna. Donec faucibus nisl et risus mattis suscipit. Maecenas et eros ipsum. Sed mattis libero vitae mi dignissim congue vitae eget massa. Pellentesque eget metus mi. Suspendisse lacus odio, luctus a purus non, auctor volutpat leo. In eu velit ligula.'
    }
];

function populate(item) {
    //define html to be changed
    let html = document.getElementById('products').innerHTML;
    //iterate over instances in the stock array
    for (let i = 0, len = item.length; i < len; i++) {
        let name = item[i].name;
        let price = item[i].price;
        let tagline = item[i].tagline;
        let imageUrl = item[i].imageUrl;
        let pageUrl = `./products/${name}`;
        let gradient = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUrl})`;
        //append html with an additional <div> per product
        html += `
                <div class="col box-col">
            <div class="box p-2" onclick="location.href='${pageUrl}'" id="for-him" style="background-image: ${gradient}">
              <h1>${name}</h1>
              <h2>${price}</h2>
              <p>${tagline}</p>
            </div>
        </div>
`
    }
    //set html of the products page
    document.getElementById('products').innerHTML = html;
}



