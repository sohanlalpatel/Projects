let steps = 0;
let calories = 0;
let distance = 0;

function addStep() {
    steps++;
    calories += 0.05; // Assume 1 step burns 0.05 calories
    distance += 0.0007; // Assume 1 step is 0.0007 km
    updateDisplay();
}

function reset() {
    steps = 0;
    calories = 0;
    distance = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('steps').innerText = steps;
    document.getElementById('calories').innerText = calories.toFixed(2);
    document.getElementById('distance').innerText = distance.toFixed(2);
}
const dietSuggestions = [
    "Eat more fruits and vegetables.",
    "Limit processed foods and sugary drinks.",
    "Drink plenty of water throughout the day.",
    "Incorporate lean proteins into your meals.",
    "Include whole grains in your diet.",
    "Limit your intake of saturated fats and sodium."
];

document.addEventListener('DOMContentLoaded', function() {
    displayRandomSuggestion();
    document.getElementById('newSuggestionBtn').addEventListener('click', displayRandomSuggestion);
});

function displayRandomSuggestion() {
    const randomIndex = Math.floor(Math.random() * dietSuggestions.length);
    document.getElementById('suggestion').innerText = dietSuggestions[randomIndex];
}
// navbar


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


