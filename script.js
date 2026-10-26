
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const remaining = document.getElementById("remaining");
const warning = document.getElementById("warning");
const clearBtn = document.getElementById("clearBtn");

textInput.addEventListener("input", function () {
    const text = textInput.value;

    // Count characters
    const characters = text.length;
    charCount.textContent = characters;

    // Count words
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    wordCount.textContent = words;

    // Calculate remaining characters
    const left = 100 - characters;
    remaining.textContent = left;

    // Reset counter colors
    charCount.className = "";
    remaining.className = "";

    // Show warnings and change colors
    if (characters === 100) {
        warning.textContent = "Character limit reached!";
        charCount.classList.add("at-limit");
        remaining.classList.add("at-limit");
    } else if (characters >= 80) {
        warning.textContent = "Warning: You are near the limit!";
        charCount.classList.add("near-limit");
        remaining.classList.add("near-limit");
    } else {
        warning.textContent = "";
    }
});

// Clear all text and reset counters
clearBtn.addEventListener("click", function () {
    textInput.value = "";
    charCount.textContent = 0;
    wordCount.textContent = 0;
    remaining.textContent = 100;
    warning.textContent = "";

    charCount.className = "";
    remaining.className = "";
});
