document.addEventListener("DOMContentLoaded", function () {
    // Display the overlay with the alert
    document.getElementById("overlay").style.display = "block";
  });
  
  // Function to close the alert
  function closeAlert() {
    document.getElementById("overlay").style.display = "none";
  }
  


function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}