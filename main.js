document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const bodyHeight = document.body.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (bodyHeight < viewportHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.width = '100%';
    } else {
        footer.style.position = 'static';
    }
});