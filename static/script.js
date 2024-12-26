const toggleCheckbox = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const nameElement = document.querySelector('.name'); // Select the name element
const navLinks = document.querySelectorAll('nav a');
const welcomeBox = document.querySelector('.welcome-box');
const footer = document.querySelector('footer');
const projectTiles = document.querySelectorAll('.project-tile');
const buttons = document.querySelectorAll('.button');
const contactButtons = document.querySelectorAll('.contact-button');
const contactForm = document.querySelector('.contact-form'); // Select contact form
const contactPage = document.querySelector('.contact-page'); // Select contact page
const contactInputs = document.querySelectorAll('.contact-form input, .contact-form textarea'); // Select inputs and textarea

// Check localStorage for the theme preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
    toggleCheckbox.checked = true; // Check the checkbox if dark mode is enabled
}

toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    nameElement.classList.add('dark-mode'); // Apply dark mode to the name
    navLinks.forEach(link => link.classList.add('dark-mode'));
    welcomeBox.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    projectTiles.forEach(tile => tile.classList.add('dark-mode'));
    buttons.forEach(button => button.classList.add('dark-mode'));
    contactButtons.forEach(button => button.classList.add('dark-mode'));
    
    // Add dark mode styles to contact page elements
    if (contactPage) {
        contactPage.classList.add('dark-mode');
    }
    if (contactForm) {
        contactForm.classList.add('dark-mode');
    }
    contactInputs.forEach(input => input.classList.add('dark-mode'));
    
    localStorage.setItem('dark-mode', 'enabled');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    nameElement.classList.remove('dark-mode'); // Remove dark mode from the name
    navLinks.forEach(link => link.classList.remove('dark-mode'));
    welcomeBox.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    projectTiles.forEach(tile => tile.classList.remove('dark-mode'));
    buttons.forEach(button => button.classList.remove('dark-mode'));
    contactButtons.forEach(button => button.classList.remove('dark-mode'));
    
    // Remove dark mode styles from contact page elements
    if (contactPage) {
        contactPage.classList.remove('dark-mode');
    }
    if (contactForm) {
        contactForm.classList.remove('dark-mode');
    }
    contactInputs.forEach(input => input.classList.remove('dark-mode'));
    
    localStorage.removeItem('dark-mode');
}
