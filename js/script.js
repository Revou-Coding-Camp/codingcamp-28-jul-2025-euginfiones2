// Ini JavaScript External
welcomeMessage();

function validateForm(event) {
    event.preventDefault(); // ← Tambahkan ini di awal fungsi

    const nameInput = document.getElementById('name');

    if (nameInput.value === '') {
        alert('Form cannot be empty!');
    } else {
        const result = document.getElementById('result-form');
        result.textContent = `Hello, ${nameInput.value}! Your message has been sent.`;
    }
}

function welcomeMessage() {
    // Prompt the user for their name and display it in the welcome speech element
    const popup = prompt('Please enter your name:');

    // If the user provides a name, update the welcome speech element
    if (popup) {
        // Get the welcome speech element and set its text content to the user's name
        const welcomeElement = document.getElementById('welcome-speech');

        // Update the text content of the welcome speech element with the user's name
        welcomeElement.textContent = popup;
    }
}