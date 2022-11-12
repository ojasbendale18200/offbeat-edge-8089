var win= window.location.href
var url =new URL(win)

var params = new URLSearchParams(url.search)

var username=params.get('username')
console.log(username)


let searchButton = document
.querySelector('#searchBtn')
.addEventListener('click', redirectToHotelPage);

function redirectToHotelPage() {
    let location = document.querySelector(".banner__searchInput > input").value

 

    window.location.assign(`hotels.html?search=${location}&username=${username}`);
    console.log(location)
    
}