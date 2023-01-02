var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML)
  })
}


document.addEventListener("keypress", function(event){
  makeSound(event.key)
})


function makeSound(key){
  switch (key) {
    case "a":
      var tom1 = new Audio("sound/tom-1.mp3");
      tom1.play();
      break;

      case "b":
        var tom2 = new Audio("sound/tom-2.mp3");
        tom2.play();
        break;

        case "c":
         var tom3 = new Audio("sound/tom-3.mp3");
         tom3.play();
          break;

          case "d":
          var tom4 = new Audio("sound/tom-4.mp3");
          tom4.play();

            break;

            case "e":
             var snare = new Audio("sound/snare.mp3");
             snare.play();
              break;

              case "f":
               var kickBass = new Audio("sound/kick-bass.mp3");
               kickBass.play();
                break;

                case "g":
                var crash = new Audio("sound/crash.mp3");
                crash.play();

                  break;
    default: console.log(key);

  }
}
