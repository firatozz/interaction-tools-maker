function myFunction() {
  var checkBox = document.getElementById("behaviourOnContent");
  var text = document.getElementById("behaviourOnContentTrue");
  if (checkBox.checked == true) {
      text.style.display = "block";
  } else {
      text.style.display = "none";
  }
}