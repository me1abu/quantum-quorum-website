const bar_btn = document.querySelector('.bar_btn');
const bar_btn_i = document.querySelector('.bar_btn i');
const drop_dn = document.querySelector('.drop_dn');
bar_btn.onclick = function () {
  drop_dn.classList.toggle('open')
  const isOpen= drop_dn.classList.contains('open')

  bar_btn_i.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active1";
}
// Auto slide
function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlide, 4000); // change every 4 seconds
}

// Initialize
showSlides(slideIndex);
autoSlide();


//learn more buttton
document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtns = document.querySelectorAll('.learn-more');
  const modal = document.getElementById('pdf-modal');
  const pdfFrame = document.getElementById('pdf-frame');
  const closeBtn = document.querySelector('.close-btn');

  learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pdfSrc = btn.getAttribute('data-pdf');
      pdfFrame.src = pdfSrc;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    pdfFrame.src = '';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      pdfFrame.src = '';
    }
  });
});