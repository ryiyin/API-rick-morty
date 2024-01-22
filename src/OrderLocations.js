const letters = document.getElementsByClassName("letter");
const characterDiv = document.getElementById("characters-render");
const imgChar = document.getElementById("selected-character-image");
const type = document.getElementById("species-data")
const status = document.getElementById("status-data")
const lastLocation = document.getElementById("last-location-data")
const firstSeen = document.getElementById("first-seen-data")



let allCharacters = [];
let filteredCharacters = "";
let count = 0
export default function OrderLocations(apiUrl) {
  // Función para realizar la solicitud a una página específica
  function fetchCharacters(pageUrl) {
    fetch(pageUrl)
      .then((response) => response.json())
      .then((data) => {
        const characters = data.results;
        if(allCharacters.length<=826){
          characters.forEach((character) => {
            allCharacters.push(character);
          });
        }

        // Si hay una página siguiente, llamamos recursivamente a fetchCharacters
        if (data.info.next) {
          fetchCharacters(data.info.next);
        } else {
          // Una vez que hemos recopilado todos los personajes, podemos procesarlos
          processCharacters();
        }
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }
  console.log(allCharacters)
  // Función para procesar los personajes una vez recopilados
  function processCharacters() {
    Array.from(letters).forEach((letter) => {
      console.log("first")
      letter.addEventListener("click", function () {
        console.log(letter.innerHTML.toLowerCase())

      // Vaciar el contenido del div
      characterDiv.innerHTML = "";

        // Filtrar personajes que comienzan con la letra seleccionada
        let filteredCharacters=allCharacters.filter((character) =>
          character.name.toLowerCase().startsWith(letter.innerHTML.toLowerCase())
        );
        
        filteredCharacters.forEach((character) => {
          let characterElement = document.createElement("div");
          
          characterElement.className = "character";
          characterElement.innerHTML = `
            <h2>${character.name}</h2>`;
            
          characterDiv.appendChild(characterElement);
    
          characterElement.addEventListener("click", function () {
            const nameChar = document.getElementById("character-details-name")
            imgChar.src = character.image;
            nameChar.textContent= character.name
            type.textContent=character.type
            status.textContent = character.dimension
            lastLocation.textContent = character.location.name
            firstSeen.textContent = `Episode ${character.episode[0].match(/[0-9]/g).join('')}`
          });
        });
        
      });
    });
  }

  // Iniciar la obtención de personajes desde la primera página
  fetchCharacters(apiUrl);
}
