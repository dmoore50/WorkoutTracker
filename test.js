const testButton = document.getElementById("testbutton");
const testP = document.getElementById("test");

var counter = 0;

testP.innerHTML = counter;

testButton.addEventListener('click', () => {
    counter++;
    testP.innerHTML = counter;

    fetch('https://workouttracker.glitch.me/save-counter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ counter })
    })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}); 