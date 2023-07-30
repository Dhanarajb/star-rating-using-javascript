// Get all the star elements
const stars = document.querySelectorAll('.star');

// Add a click event listener to each star
stars.forEach((star) => {
  star.addEventListener('click', () => {
    // Get the value of the clicked star from the data attribute
    const rating = parseInt(star.getAttribute('data-value'));

    // Mark the clicked star and all stars before it as active
    for (let i = 1; i <= rating; i++) {
      stars[i - 1].classList.add('active');
    }

    // Mark all stars after the clicked star as inactive
    for (let i = rating + 1; i <= 5; i++) {
      stars[i - 1].classList.remove('active');
    }

    // Update the selected rating text
    document.getElementById(
      'selected-rating'
    ).textContent = `Selected Rating: ${rating}`;
  });
});
