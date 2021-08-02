function Sound(check)
{
  switch (check) {
    case "w":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/crash.mp3");
      break;

  }
}
function btnflash(check)
{
  var active = document.querySelector("."+check);
  active.classList.add("pressed");

  setTimeout(function(){
    active.classList.remove("pressed")
  }, 100);
}
for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var check = this.innerHTML;
    Sound(check);
    btnflash(check);
  });
}
document.addEventListener("keypress",function(event){
  var check = event.key;
  Sound(check);
  btnflash(check);
});
