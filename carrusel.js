document.addEventListener("DOMContentLoaded", () => {
    const imagePaths = [
        './images/bg1.jpg',
        './images/bg2.jpg',
        './images/bg3.jpg',
        './images/bg4.jpg',
        './images/bg5.jpg',
        './images/bg6.jpg',
        './images/bg7.jpg',
        './images/bg8.jpg',
        './images/bg9.jpg',
        './images/bg10.jpg',
    ];

    const randomImage = imagePaths[Math.floor(Math.random() * imagePaths.length)];

    const bgImageElement = document.querySelector('.bg_image_inicio');
    if (bgImageElement) {
        bgImageElement.src = randomImage;
    }
});
