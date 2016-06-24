import $ from "jquery";
import items from "./items.js"

console.log(items)

var getSign = function (item) {
  if (item === "USD"){
    return "$";
  } else if (item === "GBP"){
    return '&pound;'
  }
}

var product = items.results.map(function(item) {
	return `<div class="product">
            <div class="product-img">
              <a href="${item.url}"><img src=${item.Images[0].url_fullxfull}></a>
            </div>
            <div class="icons">
              <div class="heart">
                <img src="./images/heart.png">
              </div>
              <div class="hamburger">
                <img src="./images/hamburger.png">
              </div>
            </div>
            <div class="product-info">
              <span class="product-title">
                  <a href="${item.url}">${item.title}</a>
              </span>
              <span class="product-company">${item.Shop.shop_name}</span>
              <span class="product-price">${item.price}</span>
              <span class="currency-code">${getSign(item.currency_code)}</span>
            </div>
          </div>`
})

$("#main").append(product)