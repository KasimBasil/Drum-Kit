for(var i=0; i<7; i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){
   makeSound(this.innerHTML);
   pressedKey(this.innerHTML);
})}


document.addEventListener("keydown",function(event){
    makeSound(event.key);
    pressedKey(event.key);
})

function makeSound(value){
    switch(value){
        case "w" :
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a" :
            var kickBass=new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s" :
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;    
        case "d" :
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "j" :
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k" :
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l" :
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            alert(buttonValue);
            break;    
    }
}

function pressedKey(value){
    document.querySelector("."+value).classList.toggle("pressed");
    setTimeout(function(){
        document.querySelector("."+value).classList.toggle("pressed");
    }, 100);
}