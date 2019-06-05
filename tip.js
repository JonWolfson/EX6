window.onload =  function() {
  let slider = document.getElementById("tip");
  slider.onmouseup = function() {
    let total = parseInt(document.getElementById("subtotal").value);
    total *= parseInt(document.getElementById("tip").value)/100 + 1;

    document.getElementById("result").innerHTML = "$" + total.toFixed(2);
  }

  slider.onmousemove = function() {
    document.getElementById("tipCurrent").innerHTML = document.getElementById("tip").value + "%";
    if(parseInt(document.getElementById("tip").value) < 15) {
      document.getElementById("tip").className = "under15";
    }
    else {
      document.getElementById("tip").className = null;
    }
  }
}
