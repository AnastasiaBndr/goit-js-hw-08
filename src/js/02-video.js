import Player from '@vimeo/player';
import _ from 'lodash.throttle';

console.log();
const storage = window.localStorage;
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let savedTime = storage.getItem("videoplayer-current-time");
 player.setCurrentTime(savedTime || 0);

player.on('timeupdate', _(timeUpdatingCounter, 1000));



function timeUpdatingCounter(evt){
    let currentTime = evt.seconds;
    storage.setItem("videoplayer-current-time", currentTime);

    console.log(currentTime);
}
