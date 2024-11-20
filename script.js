// script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors and reduce monitor size
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "ہاں تم ہو"
        document.getElementById('no-button').innerText = 'ہاں تم ہو';
        
        // Increase font size of the "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Double the font size
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // Alert message for invalid options
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length; // Cycle through colors
    }, 200); // Change color every 200 milliseconds
    
    setTimeout(function() {
        clearInterval(interval); // Stop flashing colors
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback(); // Execute callback if provided
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the initial cat.gif
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'hug.gif'; // Path to the cat image
    catImage.alt = 'manja';
    
    // Add the cat image to the container once it's loaded
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear the existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'nom.png'; // Path to the cat-heart image
    catHeartImage.alt = 'Cat Heart';

    // Add the cat-heart image to the container and adjust its position
    catHeartImage.onload = function() {
        catHeartImage.style.marginTop = '50px'; // Move the image down by 50px
        imageContainer.appendChild(catHeartImage);
        
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Resize the browser window to a smaller size (e.g., 300x200 pixels)
window.resizeTo(300, 200);

// Display the cat.gif initially
displayCat();
