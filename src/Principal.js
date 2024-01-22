import Character from "./Characters.js";

const pageMain = document.getElementById("principal-content");
const logo = document.getElementById("rick-and-morty-logo");
const charactersPage = document.getElementById("characters-page");
const galleryCharactersHome = document.getElementsByClassName("character-home")
const nameChar = document.getElementById("character-details-name")
const imgChar = document.getElementById("selected-character-image");
const species = document.getElementById("species-data")
const status = document.getElementById("status-data")
const lastLocation = document.getElementById("last-location-data")
const firstSeen = document.getElementById("first-seen-data")
const characterButton = document.getElementById('characters')
const locationButton = document.getElementById('locations')

export default function Principal() {

  logo.addEventListener("click", function () {
    pageMain.style.display = "flex";
    charactersPage.style.display = "none";
    characterButton.style.textDecoration =  'none'
    locationButton.style.textDecoration =  'none'
  });

  Array.from(galleryCharactersHome).forEach(element=>{
    const characterNameElement = element.querySelector('span');
    element.addEventListener('click',function(){
      let nameCharacater = characterNameElement.innerHTML.split(" ")[0].toLocaleLowerCase()
      imgChar.src = `/assets/${nameCharacater}.JPEG`
      nameChar.textContent = characterNameElement.innerHTML
      species.textContent = "Human"
      status.textContent = "Alive"
      nameCharacater==='morty'|| nameCharacater === 'rick'
        ?lastLocation.textContent = "Citadel of Ricks"
        :lastLocation.textContent ="Earth (Replacement Dimension)";
      nameCharacater==='morty'|| nameCharacater === 'rick'?firstSeen.textContent = "Episode 1":firstSeen.textContent ="Episode 6"
      Character()
    })
  })
}
