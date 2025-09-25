let slideIndex = 1;

// This function is called when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-photo");

  // Loop back to the beginning if we go past the last slide
  if (n > slides.length) {
      slideIndex = 1;
  }
  // Loop to the last slide if we go before the first one
  if (n < 1) {
      slideIndex = slides.length;
  }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
}

// Add event listeners for the buttons
document.querySelector('.next').addEventListener('click', () => {
  plusSlides(1);
});

document.querySelector('.prev').addEventListener('click', () => {
  plusSlides(-1);
});