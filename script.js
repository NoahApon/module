// event listener for button
document.getElementById("calc").addEventListener("click", calculation);
//function
function calculation () {
    //Gathered info from inputs
    var initialVelocity = +document.getElementById("initialVelocityInput").value;
    var finaleVelocity = +document.getElementById("finalVelocityInput").value;
    var elapsedTime = +document.getElementById("totalElapsedTime").value;
    var mass = +document.getElementById("mass").value;
    //calculations
    var averageVelocity = (finaleVelocity + initialVelocity) / 2;
    var acceleration = (finaleVelocity - initialVelocity) / elapsedTime;
    var force = mass * acceleration;
    var averageVelocity = averageVelocity.toFixed(2);
    var acceleration = acceleration.toFixed(2);
    var force = force.toFixed(2);
    //output chganges
    document.getElementById("averageVelocityOutput").innerHTML = averageVelocity;
    document.getElementById("accelerationOutput").innerHTML = acceleration;
    document.getElementById("forceOutput").innerHTML = force;
    
}