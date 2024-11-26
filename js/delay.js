import * as temp from "./temp.js";
import * as fileFetcher from "./file_fetcher.js";

// it's a function too
var sound = document.getElementById("printer_sound");
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function startSound() {
  if(fileFetcher.isLocal) 
    return;
  
  if(!sound) {
    temp.tempTag.innerHTML += `<audio id="printer_sound" src="${fileFetcher.makeLinkIndependent("resources/Dot Matrix Printer.ogg")}" >`
    sound = document.getElementById("printer_sound");
  }
  sound.play();
}

export async function stopSound() {
  if(fileFetcher.isLocal) 
    return;
  
  for(let i = 100; i >= 0; i-= 5) {
    sound.volume = i / 100;
    await delay(10);
  }
  sound.pause();
}
