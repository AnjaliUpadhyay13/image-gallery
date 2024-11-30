const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateGallery() {
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
    });

    const offset = -currentIndex * (images[0].offsetWidth + 20);
    gallery.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
});

// Initialize the gallery
updateGallery();
