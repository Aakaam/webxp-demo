function closeWindow() {
    document.querySelector('.window').style.display = 'none'; // Hides the window
}

document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput) {
        const searchURL = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
        window.open(searchURL, '_blank'); // Open search results in a new tab
    } else {
        alert('Please enter a search term.');
    }
});