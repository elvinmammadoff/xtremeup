// (function ($){
//   "use strict";
//   $("a.page-scroll").click(function(event) {
//     let $anchor = $(this);
//         $('html,body').animate({
//             scrollTop: $($anchor.attr('href')).offset().top},
//             'slow');
//             event.preventDefault();
//   });
// })(jQuery);

document.addEventListener("DOMContentLoaded", makeLinksSmooth);

function makeLinksSmooth() { 
  const navLinks = document.querySelectorAll("a.page-scroll"); 

  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) { 
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

targetElement.scrollIntoView({ behavior: "smooth", block: "end" }); 