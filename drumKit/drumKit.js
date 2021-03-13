function playSound(e){
    const audio = document.querySelector(
        `audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(
        `.key[data-key="${e.keyCode}"]`);

    if(!audio){
        return
    }

    //rewinding the audio to start
    audio.currentTime = 0;

    audio.play();

    key.classList.add("playing");
}

function removeTransition(e){
    //if property is not transform -> dont do anything
    if(e.propertyName !== "transform"){
        return;
    }

    //this here represents the current key div
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener(
    'transitionend', removeTransition));

window.addEventListener(
    'keydown', playSound
);
