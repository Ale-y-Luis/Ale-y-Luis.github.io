window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            preloader.style.display = 'none';
            document.body.classList.remove('hidden');
        }, 500);
    }, 1000);
});
