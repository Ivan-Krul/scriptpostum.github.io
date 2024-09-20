
// don't touch >:3
async function fetchFile(filePath) {
  return fetch("../" + filePath)
    .then(response => response.text())
    .catch(error => {
      console.error('*Error fetching ' + filePath + ':', error);
      throw '*Error fetching ' + filePath + ':', error;
    });
}

// it's a function too
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function loadFanartsSequentially() {
  let list = (await fetchFile("resources/fanarts_list.txt")).split('\n');
  
  for(let i = 0; i < list.length; i+= 2) {
    document.getElementById("fan_arts").innerHTML += `<a href="${list[i + 1]}"><img src="../images/fanarts/${list[i]}" class="fan_art borders"></a>`;
    await delay(250);
  }
}

async function main() {
  await delay(2000);
  document.getElementById("fan_art_container").style.display = "inherit";

  await loadFanartsSequentially();
};

await main();
