document.addEventListener("DOMContentLoaded", function() {
  const topBtn = document.getElementById("pageTop");

  window.addEventListener("scroll", scroll_event);

  topBtn.addEventListener("click", function() {
    window.scroll({
      top: 0
    });
    topBtn.style.opacity = 0.4;
  });

  topBtn.addEventListener("mouseover", () => {
    topBtn.style.opacity = 1;
  });

  topBtn.addEventListener("mouseout", () => {
    topBtn.style.opacity = 0.4;
  });

  function scroll_event() {
    if (window.scrollY > 200) {
      topBtn.style.opacity = 0.4;
    } else if (window.scrollY < 200) {
      topBtn.style.opacity = 0;
    }
  }
})