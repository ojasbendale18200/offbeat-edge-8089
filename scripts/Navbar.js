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