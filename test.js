const testButton = document.getElementById("testbutton");
const testP = document.getElementById("test");

var counter = 0;

testP.innerHTML = counter;

testButton.addEventListener('click', () => {
    counter++;
    testP.innerHTML = counter;
})