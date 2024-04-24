/*var element = document.querySelector(".sitenavigation");

// Set a timeout to hide the element after a certain amount of time (e.g., 3 seconds)
setTimeout(function() {
  
   element.classList.remove("hidden");
}, 3000) 

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('transparent');
  var contentOffset = document.querySelector('.box-container').offsetTop;
  var section3Offset = document.querySelector('#box3').offsetTop;

  if (window.pageYOffset > contentOffset && window.pageYOffset < section3Offset) {
    navbar.classList.add('scroll-on-top');
    navbar.classList.remove('scroll-past');
  } else if (window.pageYOffset >= section3Offset) {
    navbar.classList.remove('scroll-on-top');
    navbar.classList.add('scroll-past');
  } else {
    navbar.classList.remove('scroll-on-top');
    navbar.classList.remove('scroll-past');
  }
});*/



// ***********	Makes Nav bar transparent when scrolling over text	*********** //
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('transparent');
  var contentOffset = document.querySelector('.box-container').offsetTop;
  var sections = document.querySelectorAll('.box-contents');

  var scrollPosition = window.pageYOffset;

  // Check if scroll position overlaps with any part of the text content in each section
  var overlaps = Array.from(sections).some(function(section) {
    var sectionTop = section.getBoundingClientRect().top + scrollPosition;
    var sectionBottom = section.getBoundingClientRect().bottom + scrollPosition;
    return scrollPosition >= sectionTop && scrollPosition <= sectionBottom;
  });

  if (scrollPosition > contentOffset && overlaps) {
    navbar.classList.add('scroll-on-top');
    navbar.classList.remove('scroll-past');
  } else {
    navbar.classList.remove('scroll-on-top');
    navbar.classList.add('scroll-past');
  }
}); 



// ***********	When page is reloaded, starts at top of page	*********** //
window.addEventListener('beforeunload', function() {
      window.scrollTo(0, 0);
    })













/*var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var navbar = document.getElementById('transparent');
  var contentOffset = document.querySelector('.box-container').offsetTop;
  var sections = document.querySelectorAll('.box-contents');

  var scrollPosition = window.pageYOffset;

  // Check the scroll direction
  var scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';
  lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // Reset scroll position if at the top

  // Check if scroll position overlaps with any part of the text content in each section
  var overlaps = Array.from(sections).some(function(section) {
    var sectionTop = section.getBoundingClientRect().top + scrollPosition;
    var sectionBottom = section.getBoundingClientRect().bottom + scrollPosition;
    return scrollPosition >= sectionTop && scrollPosition <= sectionBottom;
  });

  if (scrollPosition > contentOffset && overlaps) {
    if (scrollDirection === 'down') {
      navbar.classList.add('scroll-on-top');
      navbar.classList.remove('scroll-past');
    } else if (scrollDirection === 'up') {
      navbar.classList.remove('scroll-past');
      navbar.classList.add('scroll-on-top');
    }
  } else {
    navbar.classList.remove('scroll-on-top');
    navbar.classList.add('scroll-past');
  }
});*/


