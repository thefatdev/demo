var productInfo = [
    {
        Background_url: "./image/mypham.png",
        Title_product: "Mỹ Phẩm"
    },
    {
        Background_url: "./image/mypham7.jpg",
        Title_product: "Mỹ Phẩm 7"
    },
    {
        Background_url: "./image/noithat7.jpg",
        Title_product: "Nội Thất 7"
    },
    {
        Background_url: "./image/ruouvang.jpg",
        Title_product: "Rượu Vang"
    }
]


var productList = []
for(i=0; i<productInfo.length; i++) {
    productList += `
    <div class="column">
            <div class="box-product">
                <div class="product_Showcase" style="background-image:url(${productInfo[i].Background_url})">
                    <div class="product_showcase_black"></div>
                    <div class="demoButton">
                        <span class="title-product">${productInfo[i].Title_product}</span> <br>
                        <button class="btn-product"><i class="fa-solid fa-eye"></i>&nbsp;Xem Demo</button>
                    </div>
                </div>
    
                <div class="catepory">
                    <span class="category-product"><i class="fa fa-shopping-bag" aria-hidden="true"></i>
                        &nbsp;Shop Bán
                        Hàng</span> <br>
                    <span class="title-product-category">${productInfo[i].Title_product}</span>
                </div>
            </div>
        </div>
    `
}

function renderListProduct() {
    document.getElementById("showListTheme").innerHTML = productList
}
// console.log(productList)