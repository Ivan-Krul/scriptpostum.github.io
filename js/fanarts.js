import { delay } from "./delay.js";

// don't touch >:3
async function fetchFile(filePath) {
  return fetch("../" + filePath)
    .then(response => response.text())
    .catch(error => {
      console.error('*Error fetching ' + filePath + ':', error);
      throw '*Error fetching ' + filePath + ':', error;
    });
}

async function loadFanartsSequentially() {
  let list = (await fetchFile("resources/fanarts_list.txt")).split('\n');
  
  for(let i = 0; i < list.length; i+= 2) {
    if(list[i][0] !== '#') {
      document.getElementById("fan_arts").innerHTML += `${list[i + 1] !== '\r' ? `<a href="${list[i + 1]}">` : '' }<img src="../images/fanarts/${list[i]}" class="fan_art borders">${list[i + 1] !== '\r' ? `</a>` : '' }`;
    }
    else if(list[i][1] !== '#') i--;
    await delay(250);
  }
}

async function main() {
  await delay(2000);
  document.getElementById("fan_art_container").style.display = "inherit";

  await loadFanartsSequentially();
};

await main();
