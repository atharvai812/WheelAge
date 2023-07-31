function redirectToBrand(brand) {
  // Redirect to the brand page
  var url = 'brand/' + brand.toLowerCase() + '.html'; // Replace with the actual URL pattern of your brand pages
  window.location.href = url;
}

// Add event listeners to each box
var boxes = document.getElementsByClassName('box');
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function() {
    var brand = this.getAttribute('data-brand');
    redirectToBrand(brand);
  });
}


// JavaScript code for non scrollable page
document.addEventListener("DOMContentLoaded", function() {
  // Get the scroll position from the session storage if available
  var scrollPosition = sessionStorage.getItem("scrollPosition");
  if (scrollPosition !== null) {
    // Restore the scroll position
    window.scrollTo(0, scrollPosition);
  }

  // Save the scroll position when leaving the page
  window.addEventListener("beforeunload", function() {
    sessionStorage.setItem("scrollPosition", window.scrollY);
  });
});
