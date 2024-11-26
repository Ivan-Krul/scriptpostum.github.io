// these function are important for fetching, so don't touch

export const isLocal = window.location.pathname.match(/ScriptPostumWebpage/);;
export function getCountToRoot() {
  let path = window.location.pathname;
  let slashCount = (path.match(/\//g) || []).length;
  let splitedStr = path.split(isLocal ? "ScriptPostumWebpage" : "scriptpostum.github.io")[0];
  let slashCountDomain = (splitedStr.match(/\//g) || []).length;
  let resCount = slashCount - slashCountDomain - 1;

  return resCount;
}
export function makeLinkIndependent(link) {
  console.log(link);
  console.log(getCountToRoot());
  if(getCountToRoot() === 0)
    return link;
  for(let i = 0; i < getCountToRoot(); i++) {
    let bufL = link;
    link = "../" + bufL;
  }
  return link;
}
