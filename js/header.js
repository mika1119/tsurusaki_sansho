document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("headerBtn");
  const lines = document.getElementsByClassName("header-btn__line");
  const nav = document.getElementById("nav");

  btn.addEventListener("click", function() {
    for (let i = 0; i < lines.length; i++) {
      lines[i].classList.toggle("open");
    }
    nav.classList.toggle("open");
  })
});