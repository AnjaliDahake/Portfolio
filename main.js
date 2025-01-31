
// back to top button start

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

  if (window.pageYOffset > 100)
  {
    toTop.classList.add("active");
  }
  else
  {
    toTop.classList.remove("active");
  }

})

// back to top button end


// Spinner
var spinner = function () {
  setTimeout(function () {
      if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show');
      }
  }, 1);
};
spinner(0);








































