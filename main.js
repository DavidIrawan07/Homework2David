// Current Date & Time

function displayDateTime () {
    let currentDate = new Date();
    let datetimeElement = document.getElementById('timebox2');
    datetimeElement.innerHTML = 'Jakarta Time: ' + currentDate;
}
displayDateTime();
setInterval(displayDateTime, 1000);


// claim button
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rewardForm');
    const submitButton = document.getElementById('submitButton');
    const claimButton = document.getElementById('claimRewardButton');
    const resultMessage = document.getElementById('resultMessage');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            // Hide the submit button and show the claim reward button
            submitButton.style.display = 'none';
            claimButton.style.display = 'block';
            
            resultMessage.innerHTML = `Form submitted successfully. You can now claim your reward.`;
        } else {
            resultMessage.innerHTML = 'Please fill out all fields.';
        }
    });

    claimButton.addEventListener('click', function() {
        // You can place your reward claim logic here, e.g., making an AJAX request to a server.
        // For this simple example, we'll just display a success message.
        resultMessage.innerHTML = `Congratulations! You've claimed your reward.`;
    });
});


// Time Session
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the splash screen and landing page
    var splashScreen = document.getElementById("splash-screen");
    var landingPage = document.getElementById("landing-page");

    // Display the splash screen for 3 seconds
    setTimeout(function () {
        splashScreen.style.opacity = 0;
        setTimeout(function () {
            splashScreen.style.display = "none";
            landingPage.style.display = "block";
        }, 500); // Fade out duration
    }, 3000); // Time to display the splash screen in milliseconds
});

// Free Wheel Spin

document.addEventListener("DOMContentLoaded", function () {
    const wheel = document.getElementById("wheel");
    const spinButton = document.getElementById("spin-button");
    const result = document.getElementById("result");

    let spinning = false;

    spinButton.addEventListener("click", function () {
        if (!spinning) {
            spinning = true;
            const spinDegree = 3600 + Math.floor(Math.random() * 360); // Randomize the number of degrees to spin
            wheel.style.transition = 'transform 4s ease-out';
            wheel.style.transform = `rotate(${spinDegree}deg)`;
            spinButton.disabled = true;

            setTimeout(() => {
                spinning = false;
                const winningSection = getWinningSection(spinDegree);
                result.textContent = `You won ${winningSection.textContent}!`;
                result.style.display = "block";
                spinButton.disabled = false;
            }, 4000); // Adjust the time according to your animation duration
        }
    });

    function getWinningSection(degrees) {
        const sections = document.querySelectorAll(".wheel-section");
        const degreeStep = 360 / sections.length;
        const normalizedDegrees = (degrees % 360 + 360) % 360; // Normalize negative degrees
        const winningIndex = Math.floor(normalizedDegrees / degreeStep);
        return sections[winningIndex];
    }
});