const navLinks = document.querySelectorAll('nav ul li a');
const sliderContainer = document.querySelector('.slider-container');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetPage = document.querySelector(link.getAttribute('href'));
        
        const index = Array.from(targetPage.parentElement.children).indexOf(targetPage);
        const slideWidth = targetPage.offsetWidth;
        sliderContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    });
});