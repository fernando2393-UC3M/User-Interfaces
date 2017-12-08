var modalVar = 1;

function showBar() {
  if (document.getElementById("Menu").style.display == "block") {
    document.getElementById("Menu").style.display = "none";
    document.getElementById("Menu1").style.display = "block";
  } else {
    document.getElementById("Menu").style.display = "block";
    document.getElementById("Menu1").style.display = "none";
  }
}

function checkPass() {
  var pw = document.getElementById("modalpass").value;
  if (pw.length < 8) {
    alert("Your password must be at least 8 characters");
    return false;
  }
  if (pw.length > 15) {
    alert("Your password must be at most 15 characters");
    return false;
  }
  if (pw.search(/[a-z]/i) < 0) {
    alert("Your password must contain at least one letter.");
    return false;
  }
  if (pw.search(/[0-9]/) < 0) {
    alert("Your password must contain at least one digit.");
    return false;
  }
  return true;
}

function modalBox() {
  if (modalVar === 1) {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }
}

function hideModal() {
  if (checkPass() === true) {
    var modal = document.getElementById("myModal");
    modalVar = 0;
    modal.style.display = "none";
  }
}

function cancel() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  return false;
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
