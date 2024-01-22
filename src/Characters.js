import orderAtoZ from "./orderAtoZ.js";

const apiUrl = "https://rickandmortyapi.com/api/character";
const alphabet = document.getElementById("category-page_alphabet-shortucs");
const characterDetails = document.getElementById("character-details-show");
const pagePrincipalContent = document.getElementById('principal-content')
const charactersPage = document.getElementById('characters-page')
const characterDiv = document.getElementById("characters-render");
const imgCharacterSelected = document.getElementById('selected-character-image')
const lastKnowLocation = document.getElementById('last-known-location')
const fristSeen = document.getElementById('character-data-bottom')
const speciesLabel = document.getElementById('species-label')
const statusLabel = document.getElementById('status-label')
const characterButton = document.getElementById('characters')
const locationButton = document.getElementById('locations')

export default function Character(){

        characterDiv.innerHTML=''
        alphabet.style.display = 'flex';
        imgCharacterSelected.style.display = 'flex'
        lastKnowLocation.style.display = 'flex'
        fristSeen.style.display = 'flex'
        imgCharacterSelected.src = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        characterDetails.style.display = 'block'
        pagePrincipalContent.style.display = 'none'
        charactersPage.style.display = 'block';
        speciesLabel.innerHTML='SPECIES'
        statusLabel.innerHTML = 'STATUS'
        characterButton.style.textDecoration =  'underline'
        locationButton.style.textDecoration =  'none'
        orderAtoZ(apiUrl)

}
