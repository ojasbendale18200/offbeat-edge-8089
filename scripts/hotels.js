var win = window.location.href;
var url = new URL(win);

var params = new URLSearchParams(url.search);

var search = params.get("search");
console.log(search);


let hotels = [
  {
    img: "https://links.papareact.com/xqj",
    location: "Private room in center of London",
    title: "Park  Hyatt",
    description:
    "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms",
    star: 2,
    price: "£30 / night",
    total: 117,
    long: -0.0022275,
    lat: 51.5421655,
  },
  {
    img: "https://links.papareact.com/hz2",
    location: "Private room in center of London",
    title: "Mandarin Oriental",
    description:
      "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms",
    star: 1,
    price: "£40 / night",
    total: 157,
    long: -0.095091,
    lat: 51.48695,
  },
  {
    img: "https://links.papareact.com/uz7",
    location: "Private room in center of London",
    title: "Hotel Six Senses",
    description:
      "4 guest · 4 bedroom · 4 bed · 2 bathrooms ",
    star: 3,
    price: "£35 / night",
    total: 207,
    long: -0.135638,
    lat: 51.521916,
  },
  {
    img: "https://links.papareact.com/6as",
    location: "Private room in center of London",
    title: "Hotel Rosewood",
    description:
      "  1 bedroom · 1 bed · 1.5 shared bthrooms · Washing Machine",
    star: 4,
    price: "£55 / night",
    total: 320,
    long: -0.069961,
    lat: 51.472618,
  },
  {
    img: "https://links.papareact.com/xhc",
    location: "Bihar",
    title: "Four Seasons",
    description:
      "3 guest · 1 bedroom · 1 bed · Dry Cleaning",
    star: 5,
    price: "£60 / night",
    total: 450,
    long: -0.08472,
    lat: 51.510794,
  },
  {
    img: "https://links.papareact.com/pro",
    location: "Private room in center of London",
    title: "Hotel Soneva",
    description:
      "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms",
    star: 5,
    price: "£65 / night",
    total: 480,
    long: -0.094116,
    lat: 51.51401,
  },
  {
    img: "https://links.papareact.com/8w2",
    location: "Hotel Taj",
    title: "5 Star Luxury Apartment",
    description:
      "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms ",
    star: 3,
    price: "£90 / night",
    total: 650,
    long: -0.109889,
    lat: 51.521245,
  },
];

let bag = [];
bag = [...hotels];

function displayHotel(data) {
  let hotelsCont = document.querySelector(".hotelsContainer");
  hotelsCont.innerHTML = data
    .map(
      (item, index) => `
 <div class="hotel id="${index} onclick = "hotelDetails(${index})">
<div class="img">
    <img src="${item.img}"/>
</div>
<div class="detail">
    <h2>${item.title}</h2>
    <p>${search}</p>
    <p class="free">Free Cancellation<br>${item.description}</p>
    <p class="rating"><span id="rate1">${item.star}</span> / 5</p>
</div>
<div class="price">
    <div class="lable">lower price available</div>
    <h3>$${item.total} Total</h3>
    <p> ${item.price} per night</p>
    <p>inclusive all taxes</p>
</div>
</div>
`
    )
    .join("");
}

// Sort
function handleSort() {
  let select = document.querySelector("#sort").value;

  if(select == "Recommended") {
    displayHotel(hotels)
  }
  if (select == "High to Low") {
    bag.sort((a, b) => b.total - a.total);
  }

  if (select == "Low to High") {
    bag.sort((a, b) => a.total - b.total);
  }

  displayHotel(bag);
  console.log(bag);
}

// Filter
function handleFilter() {
    let select = document.querySelector("#filter").value;
    let filterData = bag.filter((item) => {
       return item.star == select
    })

    displayHotel(filterData)
}

// HotelDetails
function hotelDetails(id) {
    var data = hotels[id];
    console.log(data)
    var url = 'hotelDetails.html';
    window.location.href = `${url}?name=${data.title}&price=${data.total}&rating=${data.star}&pernight=${data.price}`;
}


displayHotel(hotels);
