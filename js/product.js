const url = "https://kea-alt-del.dk/t7/api/products/2801";

// fetch the data

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then (function (data) {
        showProduct(data);
    })

// populate the page

function showProduct(product) {
    console.log(product);
    
    //breadcrumbs
    document.querySelector(".breadcrumbs .category").textContent = product.category;
    document.querySelector(".breadcrumbs .productname").textContent = product.productdisplayname;
    
    //info
    document.querySelector(".info .model-name").textContent = product.productdisplayname;
    document.querySelector(".info .color").textContent = product.basecolour;
    document.querySelector(".info .inventory-number").textContent = product.id;
    document.querySelector(".info .brand").textContent = product.brandname;
    document.querySelector(".info .info-brand").textContent = product.brandbio;

    //image
    document.querySelector("img.productimage").src=`https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`
    document.querySelector("img.productimage").alt=product.productdisplayname;
}