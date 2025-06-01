const pi=()=>{document.querySelector("#piP").innerHTML="That's right, I am memorizing some more pi";
}
let teleport = true;
let button = document.getElementById("game");

button.addEventListener("click", function() {
    teleport = false; // Stop teleporting when the object is clicked
});
document.getElementById("game").addEventListener("click",function(){
    this.style.color='green'
})

function teleportation() {
    if (teleport==true) {
        let randomX = Math.floor(Math.random() * (window.innerWidth - 50));
        let randomY = Math.floor(Math.random() * (window.innerHeight - 50));

        button.style.left = randomX + "px";
        button.style.top = randomY + "px";

        setTimeout(teleportation, 500); // Keep moving every second
    }
    }

window.onload = teleportation;

