window.addEventListener('scroll', function() {
    const newPageSection = document.getElementById('new-page');
    const sectionPosition = newPageSection.getBoundingClientRect().top;

    // Check if the new section is in the viewport
    if (sectionPosition < window.innerHeight) {
        newPageSection.classList.add('visible');
    }
});

// Redirect the user to the new page when they click the Learn More button
document.querySelector('.learn-more-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.location.href = '#new-page'; // Scroll to the new page
});
