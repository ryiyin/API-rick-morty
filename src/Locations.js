import OrderLocations from "./OrderLocations.js";

const apiUrl = ("https://rickandmortyapi.com/api/location");
const alphabet = document.getElementById("category-page_alphabet-shortucs");
const characterDetails = document.getElementById("character-details-show");
const pagePrincipalContent = document.getElementById('principal-content')
const charactersPage = document.getElementById('characters-page')
const characterDiv = document.getElementById("characters-render");
const speciesLabel = document.getElementById('species-label')
const statusLabel = document.getElementById('status-label')
const imgCharacterSelected = document.getElementById('selected-character-image');
const lastKnowLocation = document.getElementById('last-known-location')
const fristSeen = document.getElementById('character-data-bottom')
const characterButton = document.getElementById('characters')
const locationButton = document.getElementById('locations')

export default function Character(){
        characterDiv.innerHTML=''
        alphabet.style.display = 'flex';
        imgCharacterSelected.style.display = 'none'
        lastKnowLocation.style.display = 'none'
        fristSeen.style.display = 'none'
        characterDetails.style.display = 'block'
        pagePrincipalContent.style.display = 'none'
        charactersPage.style.display = 'block';
        speciesLabel.innerHTML='TYPE'
        statusLabel.innerHTML = 'DIMENSION'
        characterButton.style.textDecoration =  'none'
        locationButton.style.textDecoration =  'underline'
        OrderLocations(apiUrl)
}
