let data = JSON.parse(localStorage.getItem("register"));

let form = document.querySelector("#login");

form.addEventListener("submit",(e) => {
e.preventDefault();
var email= document.getElementById('email').value;
var pass= document.getElementById('password').value;



for (var i of data) {
   
    if (i.email == email && i.pass==pass) {
      
        console.log("yes");

        var win= window.location.href
        var url =new URL(win)
          
        var params = new URLSearchParams(url.search)   
        
        setTimeout(function(){
            window.location.href=`index.html?username=${i.name}`
        },1000)
    }else{
        swal("Wrong email or password", "Please Enter valid email or password", "error");
    }
}

})