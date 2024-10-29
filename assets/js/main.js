document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const lightOverlay = document.querySelector('#light');
    lightOverlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
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







let aboutArea = document.getElementById('about');
let experienceArea = document.getElementById('experience');
let projectsArea = document.getElementById('projects');

let aboutLink = document.getElementById('aboutLink');
let aboutSpan = document.querySelector('#aboutLink span');

let experienceLink = document.getElementById('experienceLink');
let experienceSpan = document.querySelector('#experienceLink span');

let projectsLink = document.getElementById('projectsLink');
let projectsSpan = document.querySelector('#projectsLink span');

let aboutTopCoordinate, experienceTopCoordinate, projectsTopCoordinate;

// Calculate the top coordinates once the page loads
window.onload = function() {
    aboutTopCoordinate = aboutArea.getBoundingClientRect().top + window.scrollY;
    experienceTopCoordinate = experienceArea.getBoundingClientRect().top + window.scrollY;
    projectsTopCoordinate = projectsArea.getBoundingClientRect().top + window.scrollY;

    // Ensure page scrolls to the top on load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Set initial active link
    setActiveLink("about");
};

// Helper function to update active classes
function setActiveLink(section) {
    const linkMap = {
        about: { link: aboutLink, span: aboutSpan },
        experience: { link: experienceLink, span: experienceSpan },
        projects: { link: projectsLink, span: projectsSpan },
    };

    // Reset all links
    Object.keys(linkMap).forEach((key) => {
        linkMap[key].link.classList.remove('active-Links');
        linkMap[key].link.classList.add('diactive-Links');
        linkMap[key].span.classList.remove('active-span');
        linkMap[key].span.classList.add('diactive-span');
    });

    // Activate the selected link
    linkMap[div].link.classList.add('active-Links');
    linkMap[div].link.classList.remove('diactive-Links');
    linkMap[div].span.classList.add('active-span');
    linkMap[div].span.classList.remove('diactive-span');
}

// Update active link based on scroll position
window.addEventListener('scroll', function () {
    const currentScrollY = window.scrollY;

    if (currentScrollY < experienceTopCoordinate - 1) {
        setActiveLink("about");
    } else if (currentScrollY < projectsTopCoordinate - 1) {
        setActiveLink("experience");
    } else {
        setActiveLink("projects");
    }
});