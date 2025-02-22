function loadNews() {
    fetch("content.txt")
    .then(response => response.text())
    .then(data => {
        document.getElementById("news-content").innerText = data;
    })
    .catch(error => console.error("Error loading news:", error));
}

// Load news on page load
loadNews();

// Auto-refresh every 60 seconds
setInterval(loadNews, 60000);
