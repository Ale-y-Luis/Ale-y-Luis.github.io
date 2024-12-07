document.addEventListener("DOMContentLoaded", () => {
    const imagePaths = [
        './images/Ale5.jpeg',
        './images/Ale2.jpeg',
        './images/Ale3.jpeg',
        './images/Ale4.jpeg'
    ];

    const randomImage = imagePaths[Math.floor(Math.random() * imagePaths.length)];

    const bgImageElement = document.querySelector('.bg_image_inicio');
    if (bgImageElement) {
        bgImageElement.src = randomImage;
    }
});
