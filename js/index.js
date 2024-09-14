
// it's a function too
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  await delay(100);
  document.getElementById("delay_0").style.display = "inherit";
  
  await delay(1000);
  document.getElementById("delay_1").style.display = "inherit";
  
  await delay(2000);
  document.getElementById("delay_2").style.display = "inherit";
  
  await delay(100);
  document.getElementById("delay_3_middle").style.display = "inherit";
  
  await delay(100);
  document.getElementById("delay_4").style.display = "inherit";
  
  await delay(2000);
  document.getElementById("delay_5_admin").style.display = "inherit";
};

await main();
