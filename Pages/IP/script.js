// JavaScript code
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
  