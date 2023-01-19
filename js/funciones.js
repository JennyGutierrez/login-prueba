// se obtienen los datos con getElementById
const username = document.getElementById("user");
const password = document.getElementById("password");
const boton = document.getElementById("ingresar");


boton.addEventListener('click', (e) => {
  e.preventDefault();
  let user = username.value;
  let pass = password.value;
  if (user.length == 0 || pass.length == 0) {
    alert("No se puede acceder")
  } else {
    let tarjeta = document.getElementById("card");
    tarjeta.style.display = "none";
    let mensaje = document.getElementById("mensaje");
    mensaje.style.display = "block";

    document.getElementById("nombre_usuario_ingreso").innerHTML = user;
  }
  // if(username.value == " " || password.value == " "){
  //   console.log("Ingrese datos");
  // }else{
  //   let tarjeta = document.getElementById("card");
  //   tarjeta.style.display = "none";
  //   let mensaje = document.getElementById("mensaje");
  //   mensaje.style.display = "block";
  // }
  // const data = {
  //   username: username.value,
  //   password: password.value
  // }
  // if( Object.entries(data).length === 0 ){
  //   alert("Favor de ingresar todos los datos");
  // }else{
  //   let tarjeta = document.getElementById("card");
  //   tarjeta.style.display = "none";
  //   let mensaje = document.getElementById("mensaje");
  //   mensaje.style.display = "block";
  // }
})

