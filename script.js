let clickCountChrome = 0;
const googleChrome = document.getElementById('googleChrome');
const myComputer = document.getElementById('myComputer');
const searchWindow = document.getElementById('searchWindow');

// Handle Google Chrome icon clicks
googleChrome.addEventListener('click', () => {
    clickCountChrome++;
    if (clickCountChrome === 2) {
        searchWindow.style.display = 'block'; // Show the search window
    }
    // Reset click count after 500ms
    setTimeout(() => {
        clickCountChrome = 0;
    }, 500);
});

// Handle My Computer icon clicks
myComputer.addEventListener('click', () => {
    window.location.href = 'index2.html'; // Redirect to index2.html
});

function closeWindow(windowId) {
    document.getElementById(windowId).style.display = 'none'; // Hide the window
}

// Handle search button click
document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput) {
        const searchURL = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
        window.open(searchURL, '_blank'); // Open search results in a new tab
    } else {
        alert('Please enter a search term.');
    }
});