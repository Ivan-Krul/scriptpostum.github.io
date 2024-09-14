
// don't touch >:3
async function fetchFile(filePath) {
  return fetch("../"+filePath)
    .then(response => response.text())
    .catch(error => {
      console.error('*Error fetching ' + filePath + ':', error);
      throw '*Error fetching ' + filePath + ':', error;
    });
}

function getURLParams() {
  return new URLSearchParams(window.location.search);
}

// it's a function too
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  let oc = getURLParams().get("oc");
  document.getElementById("about_who").innerText = oc.toUpperCase();
  
  await delay(1000);
  
  let json = await fetchFile("characters/"+oc+".json")
  
  
}

await main();