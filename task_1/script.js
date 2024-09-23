// Function to add 'scrolled' class to navbar when the page is scrolled
function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust this value based on when you want the style change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Add event listener to handle scroll event
window.addEventListener('scroll', handleScroll);