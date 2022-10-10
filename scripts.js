// JS for TP5


//funtion to load a file from the url "fromFile" into the object identified as "whereTo"
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML += this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();

}


window.onload = function() {

  loadFileInto("ingredients.html", "#ingredients ul");

  loadFileInto("equipment.html", "#equipment ul");

  loadFileInto("directions.html", "#directions ol");

  document.querySelector("#header h1").classList.add("tp");

  document.querySelector("#header h1.tp").onclick = function() {
    this.classList.toggle("white");
  }

  document.querySelector("#bigflex #ingredients").onclick = function() {
    this.classList.toggle("tpshow");
  }

  document.querySelector("#bigflex #equipment").onclick = function() {
    this.classList.toggle("tpshow");
  }

  document.querySelector("#bigflex #directions").onclick = function() {
    this.classList.toggle("tpshow");
  }

  //document.querySelector("#thanks background-image").classList.add("transparent");

  //document.querySelector("thanks background-image.transparent").style.opacity = "0.5";

  document.querySelector("#thanks h1").classList.add("bg");

  document.querySelector("#footer").classList.add("bg");

  setTimeout(function() {
    document.querySelector("#bigflex #ingredients ul").innerHTML += '<li>A smattering of <span class="notice">sunshine dust</span></li>';

    document.querySelector("#bigflex #equipment ul").innerHTML += '<li><span class="notice"><span class="measure">36-inch</span> claw of a dragon</span> <span class="measure">(Species up to personal preference)</span></li>';

    document.querySelector("#bigflex #directions ol").innerHTML += '<li>Use <span class="notice">dragon claw</span> to shave <span class="notice">sunshine dust</span> <span class="measure">sparingly</span> over flan.</li><li>Enjoy!</li>';
  }, 100);



}; // end window.onload