import Character from "./Characters.js";
import Principal from "./Principal.js";
import Locations from "./Locations.js";

const characterButton = document.getElementById('characters')
const locationButton = document.getElementById('locations')

export default function Navigation() {
  Principal();
  characterButton.addEventListener("click", function () {
    Character();
  });
  locationButton.addEventListener('click', function(){
    Locations()
  })
  
}
