function getRandomColor() {
    // This function generates a random color in hexadecimal format
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the color of 'PHOEBE'
function changeColor() {
    const nameElement = document.getElementById('name');
    if (nameElement) {
        nameElement.style.color = getRandomColor();
    }
}

// Change color every 1 second (1000 milliseconds)
setInterval(changeColor, 1000);

// Initial color change on page load
window.onload = changeColor;



let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 1; // Start with the middle item as active

function loadShow() {
    let stt = 0;

    // Handle items after the active item
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = 0.6; // Ensure visibility
        items[i].classList.remove('active');
    }

    stt = 0;

    // Handle items before the active item
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = 0.6; // Ensure visibility
        items[i].classList.remove('active');
    }

    // Handle the active item
    items[active].style.transform = 'translateX(0) scale(1) perspective(16px) rotateY(0)';
    items[active].style.zIndex = 0;
    items[active].style.filter = 'blur(0)';
    items[active].style.opacity = 1;
    items[active].classList.add('active'); // Highlight the active item
}


next.onclick = function() {
    if (active < items.length - 1) {
        active++;
    } else {
        active = 0;
    }
    loadShow();
};

prev.onclick = function() {
    if (active > 0) {
        active--;
    } else {
        active = items.length - 1;
    }
    loadShow();
};

window.onload = loadShow;


AOS.init({
    // global settings here
    duration: 1000,
});