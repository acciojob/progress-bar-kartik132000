// Select elements
const circles = document.querySelectorAll(".circle");
const progressLine = document.querySelector(".progress-line");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Track the current step (starts at 1)
let currentStep = 1;

// Function to update progress bar and buttons
function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    // Update progress bar width based on active circles
    const activeCircles = document.querySelectorAll(".circle.active").length;
    progressLine.style.width = ((activeCircles - 1) / (circles.length - 1)) * 100 + "%";

    // Disable/Enable buttons based on progress
    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === circles.length;
}

// Event listener for "Next" button
nextBtn.addEventListener("click", () => {
    if (currentStep < circles.length) {
        currentStep++;
        updateProgress();
    }
});

// Event listener for "Previous" button
prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        updateProgress();
    }
});

// Ensure correct initial state when page loads
document.addEventListener("DOMContentLoaded", () => {
    updateProgress();
});
