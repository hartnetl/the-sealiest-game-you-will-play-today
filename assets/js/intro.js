document.addEventListener("DOMContentLoaded", function() {
      let myWins = localStorage.getItem('wins');
      let myLosses = localStorage.getItem('losses');
  
      if (localStorage === undefined || " " || null || NaN) {
          document.getElementById('win').innerText = 0;
          document.getElementById('lose').innerText = 0;
      } else {
          document.getElementById('win').innerText = myWins;
          document.getElementById('lose').innerText = myLosses;
  }});

// Set variables to access modal elements
let modal = document.getElementById("helpModal");
let btn = document.getElementById("instructions");
let exit = document.getElementById("close");

// Open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Close the modal
exit.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
