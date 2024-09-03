// Function to show the loader
function showLoader() {
    document.getElementById("loader").style.display = "block";
}

// Function to hide the loader
function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

// Example of usage in an AJAX request
function fetchData() {
    showLoader();
    
    // Simulate an AJAX request
    setTimeout(function() {
        // Request finished, hide the loader
        hideLoader();
    }, 2000); // Simulating a 2-second request
}

// Trigger the function
fetchData();
