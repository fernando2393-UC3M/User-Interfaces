function showBar(){
if (document.getElementById('bar').style.display=="block") {

    document.getElementById('bar').style.display="none";
}
  else{

      document.getElementById('bar').style.display="block";
  }
}
function checkPass() {

  /* parámetros que debe cumplir,
  Minimo 8 caracteres
  Maximo 15
  Al menos un dígito
  No espacios en blanco
  */

  var regexp_password = /^(?=.*[a-z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){1,8}$/;
  var regexp_email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  // cojo el valor de los input
  var contrasenia = document.getElementById('passwordModal').value;
  var email = document.getElementById('emailModal').value;
  cemail = "Email";
  cpass = "Pass";
  // compruebo si contrasenia cumple las condiciones de expresión regular, lo hago mediante función test.
  if (regexp_password.test(contrasenia) && regexp_email.test(email)) {
    document.getElementById('myModal').style.display = "none";
    return true;
  } else {
    if (!regexp_password.test(contrasenia)) {
      alert('Wrong...! Please put a correct password!');
      return false;
    } else {
      alert('Wrong...! Please put a correct email!');
      return false;
    }
  }
}
