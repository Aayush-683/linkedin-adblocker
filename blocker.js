// Avoid triggering too frequently
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
let ticking = false;

function hidePromoted() {
  var spans = document.querySelectorAll('span[aria-hidden="true"]');
  
  for (var i=0; i<spans.length; i++) {
    var span = spans[i]; // The "Promoted" indicator is a span element
    if (span.textContent.startsWith("Promoted")) {
      
      // The post itself exists 10 levels above this "Promoted" indicator (As of Jun 2024)
      for (var j=0; j < 10; j++) span = span.parentElement;

      console.log("Poof! Promoted post hidden.");
      span.remove()
    }
  }
}

document.addEventListener("scroll", (event) => {
  if (!ticking) {
    window.requestAnimationFrame(() => { // Avoid triggering too frequently
      hidePromoted();
      ticking = false;
    });

    ticking = true;
  }
});