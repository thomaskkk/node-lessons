for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    outputSound(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  outputSound(event.key);
});

function outputSound(key) {
  switch (key) {
    case "a":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "r":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "t":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "n":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "e":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "i":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}
