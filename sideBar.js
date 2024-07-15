function handleClick() {
  var x = document.getElementById("navbarid");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
