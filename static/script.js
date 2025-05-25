// Select elements
const toggleCheckbox = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const nameElement = document.querySelector('.name');
const navLinks = document.querySelectorAll('nav a');
const welcomeBox = document.querySelector('.welcome-box');
const footer = document.querySelector('footer');
const projectTiles = document.querySelectorAll('.project-tile');
const buttons = document.querySelectorAll('.button');
const contactButtons = document.querySelectorAll('.contact-button');
const contactForm = document.querySelector('.contact-form');
const contactInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

// Check for device color scheme preference
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

// Function to handle theme based on device preference
function handleDeviceThemeChange(e) {
    if (localStorage.getItem('theme-preference') === null) {
        // Only use device preference if user hasn't explicitly set a preference
        if (e.matches) {
            enableDarkMode();
            toggleCheckbox.checked = true;
        } else {
            disableDarkMode();
            toggleCheckbox.checked = false;
        }
    }
}

// Check localStorage for theme preference and apply on page load
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
    toggleCheckbox.checked = true; // Ensure checkbox matches the dark mode state
    localStorage.setItem('theme-preference', 'set'); // Mark that user has set preference
} else if (localStorage.getItem('dark-mode') === null) {
    // If no preference is stored, use device preference
    handleDeviceThemeChange(prefersDarkMode);
} else {
    disableDarkMode();
    toggleCheckbox.checked = false; // Ensure checkbox matches the light mode state
    localStorage.setItem('theme-preference', 'set'); // Mark that user has set preference
}

// Listen for changes in device theme preference
prefersDarkMode.addEventListener('change', handleDeviceThemeChange);

// Toggle theme on checkbox change
toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
    // Store that the user has explicitly set a preference
    localStorage.setItem('theme-preference', 'set');
});

// Enable dark mode
function enableDarkMode() {
    console.log('Dark mode enabled');
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    nameElement.classList.add('dark-mode');
    navLinks.forEach(link => link.classList.add('dark-mode'));
    welcomeBox.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    projectTiles.forEach(tile => tile.classList.add('dark-mode'));
    buttons.forEach(button => button.classList.add('dark-mode'));
    contactButtons.forEach(button => button.classList.add('dark-mode'));

    // Apply dark mode to all inputs and textareas in the contact form
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.classList.add('dark-mode');
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => input.classList.add('dark-mode'));
    });

    // Save preference in localStorage
    localStorage.setItem('dark-mode', 'enabled');
}

// Disable dark mode
function disableDarkMode() {
    console.log('Dark mode disabled');
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    nameElement.classList.remove('dark-mode');
    navLinks.forEach(link => link.classList.remove('dark-mode'));
    welcomeBox.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    projectTiles.forEach(tile => tile.classList.remove('dark-mode'));
    buttons.forEach(button => button.classList.remove('dark-mode'));
    contactButtons.forEach(button => button.classList.remove('dark-mode'));

    // Remove dark mode from all inputs and textareas in the contact form
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.classList.remove('dark-mode');
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => input.classList.remove('dark-mode'));
    });

    // Remove preference from localStorage
    localStorage.removeItem('dark-mode');
}