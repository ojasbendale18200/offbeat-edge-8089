window.addEventListener('load', () => {
    let moreTravel = document
      .getElementById('more__travel')
      .addEventListener('click', showSubMenu);
     
  });

 var submenuCounter = 0;

var showSubMenu = () => {
  let submenu = document.querySelector('.submenu');
  if (submenuCounter % 2 == 0) {
    submenu.style.display = 'block';
    submenuCounter++;
  } else {
    submenu.style.display = 'none';
    submenuCounter++;
  }
};

var win= window.location.href
var url =new URL(win)

var params = new URLSearchParams(url.search)

var username=params.get('username')

var user= document.getElementById('username')


if(username==null){
  user.textContent="Sign Up"
  user.style.display = "none"
}else{
  user.style.display = "block"
  user.textContent= `Hello ${username}`

  
}