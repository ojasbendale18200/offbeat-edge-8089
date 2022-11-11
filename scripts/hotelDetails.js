var win = window.location.href;
var url = new URL(win);

var params = new URLSearchParams(url.search);

var hotelName = params.get("name");
var hotelPrice = params.get("price");
var hotelRating = params.get("rating");
var hotelPernight = params.get("pernight");

console.log(hotelPrice,hotelRating);

let names = document.querySelector("#hotelname")
names.innerText =  hotelName

let reviews = document.querySelector("#reviews > div > h3")
reviews.innerText = `${hotelRating} / 5 Wonderfull`

let perNight = document.querySelector(".pricedollar")
perNight.innerText = hotelPernight

let total = document.querySelector(".totalprice")
total.innerText = `$${hotelPrice}`