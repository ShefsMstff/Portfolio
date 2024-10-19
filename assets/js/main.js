document.addEventListener('mousemove', function (e) {
    const x = e.pageX;
    const y = e.pageY;
    const gradientOverlay = document.querySelector('#gradient-overlay');
    gradientOverlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
});

const menuItems = document.querySelectorAll('.page-partials a');
const contentSections = document.querySelectorAll('.text-informations > div');
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const selectedMenu = item.textContent.trim().toLowerCase();
        contentSections.forEach(content => {
            if (content.classList.contains(`text-informations-${selectedMenu}`)) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});
document.querySelector('.page-partials a:first-child').classList.add('active');
document.querySelector('.text-informations-about').classList.add('active');



