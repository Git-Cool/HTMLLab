
window.onload = function () {
    var el;
    el = document.getElementById("breakup");
    el.setAttribute("class", "hidden");
    el = document.getElementById("datequestion");
    el.setAttribute("class", "hidden");
    el = document.getElementById("olivegarden");
    el.setAttribute("class", "hidden");
    el = document.getElementById("bloomingonion");
    el.setAttribute("class", "hidden");
    el = document.getElementById("weekgoing");
    el.setAttribute("class", "hidden");
};

// Function to handle "Yes" button click
function chYfun() {
    var thebutton;
    thebutton = document.getElementById("breakup");
    thebutton.classList.remove("hidden"); // Show the breakup div
    document.getElementById("chY").classList.add("selected"); // Add the selected class to the Yes button
}