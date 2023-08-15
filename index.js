//Detecting Button Press

var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML)
  });
}
 
//Detecting Keyboard Press

document.addEventListener("keypress", function (event){
    makeSound(event.key)
})

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("music/tom-1.mp3");
            tom1.play()
            break;
        case "a":
            var tom2 = new Audio("music/tom-2.mp3");
            tom2.play()
            break;
        case "s":
            var tom3 = new Audio("music/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("music/tom-4.mp3");
            tom4.play()
            break;
        case "j":
            var snare = new Audio("music/snare.mp3");
            snare.play()
            break;
        case "k":
            var crash = new Audio("music/crash.mp3");
            crash.play()
            break;
        case "l":
            var kick = new Audio("music/kick-bass.mp3");
            kick.play()
            break;
        default: console.log(buttonInnerHTML);
    }
}
