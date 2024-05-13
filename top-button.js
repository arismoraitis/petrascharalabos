function topFunction() {
  if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        requestAnimationFrame(topFunction);
    }
}

// Get the button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", topFunction);
}
