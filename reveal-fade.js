/* kodikas animation
<script>// <![CDATA[
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
// ]]></script>
*/
/* kodikas gia animation */

<script>// <![CDATA[
//Get the button

document.getElementById("scrollToTopBtn").addEventListener("click", topFunction);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        requestAnimationFrame(topFunction);
    }
}
// ]]></script>
