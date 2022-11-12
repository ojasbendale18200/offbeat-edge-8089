 // Get the modal
 var modal = document.getElementById("myModal");
        
 // Get the button that opens the modal
 var btn = document.getElementById("reserve_btn");

 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

 var win = window.location.href;
var url = new URL(win);

var params = new URLSearchParams(url.search);

var hotelName = params.get("name");
var hotelPrice = params.get("price");
var hotelRating = params.get("rating");
var hotelPernight = params.get("pernight");
var hotelDesc = params.get("desc")
var username=params.get('username')



 let payNow = document.querySelector("#book").addEventListener("click",() => {
  let url = "payment.html"
    window.location.href = `${url}?name=${hotelName}&total=${hotelPrice}&rating=${hotelRating}&pernight=${hotelPernight}&desc=${hotelDesc}&username=${username}`
 })

 console.log(hotelPrice)
