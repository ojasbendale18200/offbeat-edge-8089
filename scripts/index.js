


let searchButton = document
.querySelector('#searchBtn')
.addEventListener('click', redirectToHotelPage);

function redirectToHotelPage() {
    let location = document.querySelector(".banner__searchInput > input").value

    window.location.assign(`hotels.html?search=${location}`);
    console.log(location)
    
}