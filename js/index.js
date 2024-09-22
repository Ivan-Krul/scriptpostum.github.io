import * as delayer from "./delay.js";

// don't touch >:3
async function fetchFile(filePath) {
  return fetch(filePath)
    .then(response => response.text())
    .catch(error => {
      console.error('*Error fetching ' + filePath + ':', error);
      throw '*Error fetching ' + filePath + ':', error;
    });
}

async function loadOCLinks() {
  let list = (await fetchFile("characters/list.txt")).split('\n');
  
  for(let i = 0; i < list.length; i++) {
    document.getElementById("links").innerHTML += `<div><a href="pages/character.html?oc=${list[i]}">${list[i]}</a></div>`;
  }
}

async function main() {

  await delayer.delay(100);
  document.getElementById("delay_0").style.display = "inherit";
  
  await delayer.delay(1000);
  document.getElementById("delay_1").style.display = "inherit";
  
  await delayer.delay(2000);
  document.getElementById("delay_2").style.display = "inherit";
  
  await delayer.delay(100);
  document.getElementById("delay_3_middle").style.display = "inherit";
  
  await loadOCLinks();
  
  await delayer.delay(100);
  document.getElementById("delay_4").style.display = "inherit";
  
  await delayer.delay(2000);
  document.getElementById("delay_5_admin").style.display = "inherit";
  
  await delayer.delay(50);
  document.getElementById("delay_6_socials").style.display = "inherit";
  
  await delayer.delay(1000);
  document.getElementById("delay_7").style.display = "inherit";
};

delayer.startSound();
await main();
await delayer.stopSound();
