let form = document.querySelector("#signin");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let LSData =  [];
  var name = document.getElementById("f&l_name").value;
  var email = document.getElementById("email").value;

  var pass = document.getElementById("password").value;
  let user = {
    name: name,
    email: email,
    pass: pass,
  };
  LSData.push(user);
  localStorage.setItem("register", JSON.stringify(LSData));
  swal("Sign Up Success", "Enjoy your Trip", "success");
});
