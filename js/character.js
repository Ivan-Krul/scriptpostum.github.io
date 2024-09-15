
// don't touch >:3
async function fetchFile(filePath) {
  return fetch("../"+filePath);
}

function getURLParams() {
  return new URLSearchParams(window.location.search);
}

// it's a function too
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  let oc = getURLParams().get("oc");
  document.getElementById("about_who").innerText = oc.toUpperCase();
  
  await delay(2000);
  
  document.getElementById("profile").style.display = "inherit";
  
  let is_invalid = false;
  
  const json = await fetchFile("characters/"+oc+".json")
    .then(resp => resp.json())
    .catch((error) => {
      console.error(error);
      document.getElementById("error_string").innerText = error;
      is_invalid = true;
  });
  
  if(is_invalid) return;
  
  document.getElementById("actual_profile").style.display = "inherit";
  
  document.getElementById("name").innerText =     json.NAME;
  document.getElementById("pronouns").innerText = json.PRONOUNS;
  document.getElementById("age").innerText =      json.AGE === null ? "NULL" : json.AGE;
  document.getElementById("likes").innerText =    json.LIKES;
  document.getElementById("dislikes").innerText = json.DISLIKES;
  
  document.getElementById("pfp").src = "../"+json.PFP_PATH;
  
  const bio = await fetchFile("characters/"+oc+".bio")
    .then(resp => resp.text())
    .catch((error) => {
      console.error(error);
      document.getElementById("error_string").innerText = error;
      is_invalid = true;
  });
  
  const new_bio = bio.replaceAll("\n", " ").replaceAll("\r", "").replaceAll("\\n", "\n");
  
  document.getElementById("bio").innerText = is_invalid ? "NULL" : new_bio;
  
}

await main();