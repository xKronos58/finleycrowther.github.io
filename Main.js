// Moves the nav bar when the scroll position is at the bottom of the page
// just under the gradient bar for the get in touch page.
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const menu_button = document.querySelector('.hamburger-menu');
    const icon = document.querySelector('.icon');
    const footer = document.querySelector('.footer');
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Move the navbar to the bottom of the screen when the footer is visible
    if (footerPosition <= windowHeight) {
        navbar.style.top = '85vh';
        menu_button.style.top = '85vh';
        icon.style.top = '85vh';
    } else {
        navbar.style.top = '33px';
        menu_button.style.top = '31px';
        icon.style.top = '33px';
    }
});

// Set the nav bar to black if the text is above a white background.
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const menu_button = document.querySelector('.hamburger-menu');
    const icon = document.querySelector('.icon');
    const links = navbar.querySelectorAll('a'); // Assuming the navbar links are inside <a> tags

// Get the element directly under the navbar
    const elementUnderNavbar = document.elementFromPoint(navbar.getBoundingClientRect().left + 1, navbar.getBoundingClientRect().bottom + 1);

// If the background color is white (or light), change the text color to black
    const backgroundColor = window.getComputedStyle(elementUnderNavbar).backgroundColor;

    if (isLightColor(backgroundColor) || elementUnderNavbar.id === 'light-pg') {
        links.forEach(link => link.style.color = 'black');
        menu_button.style.stroke = '#000000';
        icon.src = 'images/FC_b.png';
    } else {
        links.forEach(link => link.style.color = 'white');
        menu_button.style.stroke = 'white';
        icon.src = 'images/FC.png';
    }
});

function isLightColor(color) {
    const rgb = color.match(/\d+/g);
    if (!rgb) return false;

    const r = parseInt(rgb[0]);
    const g = parseInt(rgb[1]);
    const b = parseInt(rgb[2]);

// Simple brightness formula
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

// Consider it light if brightness is above a certain threshold
    return brightness > 200;
}

let inverted = false;

// NOT IN USE MAY USE IN FUTURE IF I CAN INVERT IMAGES...
function invertColors() {
    if(!inverted) {
        document.body.style.filter = 'invert(1)';

// Invert images back to normal since they will also be inverted
        const images = document.querySelectorAll('img');
        images.forEach(function(img) {
            img.style.filter = 'invert(1)';
        });
        inverted = true;
    } else {
        console.log(inverted);
        document.body.style.fill = 'invert(0)';

    }
}


// Sends welcome message
// noinspection JSVoidFunctionReturnValueUsed,JSCheckFunctionSignatures
onload(firstVisit())

function firstVisit() {
    // Check if 'firstVisit' exists in localStorage
    if (!localStorage.getItem('firstVisit')) {
        // Show the alert
        alert("Hello!\nThis website is still under construction. \nThe design is not final so i apologies if anything does not function as intended\nThank you! 😁");

        // Set 'firstVisit' in localStorage to mark the user's first visit
        localStorage.setItem('firstVisit', 'true');
    }
}