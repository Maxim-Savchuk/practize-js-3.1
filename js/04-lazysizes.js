/*
 * Библиотека lazysizes
 * - feature detection
 */

if ('loading' in HTMLImageElement.prototype) {
    console.log('Браузер поддерживает lazyload');

    addSrcAtrToLazyImages();
} else {
    console.log('Браузер НЕ поддерживает lazyload');

    lazySizesScript();
}

const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, { once: true, });
})

function onImageLoaded(evt) {
    evt.target.classList.add('appear');
}

function addSrcAtrToLazyImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
}

function lazySizesScript() {
    const script = document.createElement('script');

    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    script.integrity =
        'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
    script.crossOrigin = 'anonymous';
    script.referrerpolicy = 'no-referrer';

    document.body.appendChild(script);
}