let currentIndex = 0;

function moveCarousel(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    const offset = -currentIndex * 100; // Move by 100% for each image
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Auto-scroll every 5 seconds
setInterval(() => {
    moveCarousel(1);
}, 5000); // Adjust the time as needed (5000ms = 5 seconds)
