let currentIndex = 0;
const slider = document.getElementById("slider");
let cards = document.querySelectorAll(".program-card");
const visibleCards = 4;

/* 🔥 CLONE FIRST & LAST CARDS */
const firstClones = [];
const lastClones = [];

cards.forEach((card, i) => {
    if (i < visibleCards) {
        firstClones.push(card.cloneNode(true));
    }
    if (i >= cards.length - visibleCards) {
        lastClones.push(card.cloneNode(true));
    }
});

/* Add clones */
firstClones.forEach(clone => slider.appendChild(clone));
lastClones.reverse().forEach(clone => slider.insertBefore(clone, slider.firstChild));

/* Update cards again */
cards = document.querySelectorAll(".program-card");

/* Start from real first */
currentIndex = visibleCards;
updateSlider();



/* Slide Right */
function slideRight() {
    currentIndex++;
    updateSlider();

    if (currentIndex === cards.length - visibleCards) {
        setTimeout(() => {
            slider.style.transition = "none";
            currentIndex = visibleCards;
            updateSlider();
            slider.offsetHeight;
            slider.style.transition = "transform 0.5s ease-in-out";
        }, 500);
    }
}

/* Slide Left */
function slideLeft() {
    currentIndex--;
    updateSlider();

    if (currentIndex === 0) {
        setTimeout(() => {
            slider.style.transition = "none";
            currentIndex = cards.length - (2 * visibleCards);
            updateSlider();
            slider.offsetHeight;
            slider.style.transition = "transform 0.5s ease-in-out";
        }, 500);
    }
}

/* Your same function */
function updateSlider() {
    const cardWidth = cards[0].offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function openProgram(index) {
    window.location.href = "program.html?slide=" + index;
}

/* 🔥 Auto Slide */
setInterval(() => {
    slideRight();
}, 3000);

// banner

let banner = document.getElementById("banner");
let index = 0;
let totalBanners = banner.children.length;

function showBanner(i) {
    if (i >= totalBanners) index = 0;
    else if (i < 0) index = totalBanners - 1;
    else index = i;

    banner.style.transform = `translateX(-${index * 100}%)`;
}

function nextBanner() {
    showBanner(index + 1);
}

function prevBanner() {
    showBanner(index - 1);
}

/* Auto Slide */
setInterval(() => {
    nextBanner();
}, 3000);

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    if (nav) {
        nav.classList.toggle("active");
    }
}
