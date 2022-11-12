var win = window.location.href;
var url = new URL(win);

var params = new URLSearchParams(url.search);

var hotelName = params.get("name");
var hotelPrice = params.get("total");
var hotelRating = params.get("rating");
var hotelPernight = params.get("pernight");
var hotelDesc = params.get("desc")
var username=params.get('username')
console.log(hotelRating,hotelPernight)

// Shows User
let user = document.querySelector(".blocks > h4 > span")
user.innerText = `Welcome ${username}`

// Shows Hotel
let hotel = document.querySelector("#payHname > span")
hotel.innerText = `${hotelName}`

// Shows Rooms
let rooms = document.querySelector(".userIconDiv > span")
rooms.innerText = hotelDesc

// Total
let total = document.querySelector("#payTotal >  span")
total.innerText = `$${hotelPrice}`


document.querySelector("#completeBtn").addEventListener("click",() => {
  let otp =  document.querySelector("#otp").value
  let name = document.querySelector("#nameOfCard").value
  let cardNo = document.querySelector("#debCardNum").value
  console.log(name,cardNo)



  if(otp == "1234"){
    swal('Payment Successful', 'Enjoy your Trip', 'success');
    window.location.assign("success.html")
  } else  {
    swal('Payment Unsuccessful', 'Plz Enter Correct OTP', 'error');
  }
})




