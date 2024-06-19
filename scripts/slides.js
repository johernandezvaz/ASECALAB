document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let slideInterval = setInterval(nextSlide, 3000);

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function changeSlide(direction) {
        clearInterval(slideInterval); // Stop automatic sliding
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        showSlide(currentIndex);
        slideInterval = setInterval(nextSlide, 5000); // Restart automatic sliding
    }

    // Show the first slide initially
    showSlide(currentIndex);
});
