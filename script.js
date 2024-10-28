let chamber = document.querySelector("#cha");
let mainContent = document.querySelector("#main");
let countOfKills = document.createElement("p");
let currentCount = 0;
let maxCount = 15;
let countOfKillsContent = `${currentCount} тупых чемберов из ${maxCount}`;
countOfKills.innerHTML = countOfKillsContent;
countOfKills.classList.add("text");
mainContent.prepend(countOfKills);

document.addEventListener("click", function (e) {
  if (e.target.id === "cha") {
    let translate = `transform: translate(${generateRandomInt()}px, ${generateRandomInt()}px);`;
    chamber.style = translate;
    currentCount++;
    countOfKillsContent = `${currentCount} тупых чемберов из ${maxCount}`;
    countOfKills.innerHTML = countOfKillsContent;
    countOfKills.classList.add("text");
    mainContent.prepend(countOfKills);
    if (currentCount == maxCount) {
      alert("Идеш в вал?");
      currentCount = 0;
    }
  }
});

function generateRandomInt() {
  return Math.floor(Math.random() * 600) + 1;
}
