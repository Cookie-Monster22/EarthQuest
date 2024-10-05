// Display real-time date and time
document.addEventListener('DOMContentLoaded', function () {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const now = new Date();
    
    if (dateElement) dateElement.textContent = now.toLocaleDateString();
    if (timeElement) timeElement.textContent = now.toLocaleTimeString();

    // Fetch NASA location data (placeholder)
    const locationElement = document.getElementById('location');
    if (locationElement) locationElement.textContent = "NASA Satellite Location";

    // Check the mode of transport and display the journey impact
    const transportModeElement = document.getElementById('transport-mode');
    if (transportModeElement) {
        const mode = localStorage.getItem('transport');
        transportModeElement.textContent = `You chose: ${mode}`;
        
        let impactText = '';
        if (mode === 'car') {
            impactText = "Driving a car emits 4.6 metric tons of CO2 per year.";
        } else if (mode === 'bike') {
            impactText = "Riding a bike is great for the environment!";
        } else if (mode === 'transit') {
            impactText = "Public transit reduces emissions by 45%.";
        }
        document.getElementById('impact-info').textContent = impactText;
    }

    // Display final result
    const resultMessageElement = document.getElementById('result-message');
    if (resultMessageElement) {
        const cleanup = localStorage.getItem('cleanup');
        if (cleanup === 'clean') {
            resultMessageElement.textContent = "You cleaned up! The environment thanks you.";
        } else {
            resultMessageElement.textContent = "Leaving trash harms wildlife and pollutes the area.";
        }
    }
});

// Store transportation choice
function chooseTransport(mode) {
    localStorage.setItem('transport', mode);
    window.location.href = 'journey.html';
}

// Store cleanup decision
function chooseCleanup(option) {
    localStorage.setItem('cleanup', option);
    window.location.href = 'result.html';
}
