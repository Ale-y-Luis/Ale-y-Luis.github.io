document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const onIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(onIntersection, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.float_in_to_right, .float_in_to_left');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
