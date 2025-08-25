console.log("Your JavaScript code file is now connected to your website.");

/* Edited version of the original code to make sure animations won't play again 
while scrolling up back to the top of the page (content would disappear again in that case) */

const root = document.documentElement;

// Set to keep track of elements that have already been animated
const activatedElements = new Set();

// Function to handle scroll-based animation triggering
const scroll = () => {
    // Calculate scroll position as a fraction of the total page height
    // 0 = top of page, 1 = bottom of page
    const position = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);

    // Update the --scroll CSS variable, which can be used in your CSS for animations
    root.style.setProperty('--scroll', position);

    // Loop through all elements with the class 'animate' already appied in HTML, which are 
    // the only ones that will be animated
    document.querySelectorAll('.animate').forEach(el => {
        // Read the --delay CSS variable for this element (if not set, default to 0)
        const delay = parseFloat(getComputedStyle(el).getPropertyValue('--delay')) || 0;

        // Check if scroll position has passed the element's delay value
        // and if the element has not been animated yet
        if (position >= delay && !activatedElements.has(el)) {
            // Start the CSS animation for this element
            el.style.animationPlayState = 'running';

            // Add this element to the set to mark it as already activated
            activatedElements.add(el);
        }
    });
};

// Initialize animations on page load and set up scroll listener
document.addEventListener('DOMContentLoaded', () => {
    scroll(); // Trigger animation check once when page loads
    window.addEventListener('scroll', scroll, false); // Trigger animation check on scroll
});