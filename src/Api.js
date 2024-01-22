const amountCha = document.getElementsByClassName("category-page_total-number");

export function Api(apiUrl, divElement) {
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let personajes = data.results;
        console.log(personajes[2])
        personajes.forEach((personaje) => {
          
          const characterElement = document.createElement("div");
          characterElement.className = "character";
          characterElement.innerHTML = `
            <img src="https://rickandmortyapi.com/api/character/avatar/${personaje.id}.jpeg" >
            <h2 >${personaje.name}</h2>`;
          divElement.appendChild(characterElement);
          amountCha[0].textContent = `All Items (${data.info.count})`;
        });

      })
      .catch((error) => {
        console.error("Error al consumir la API:", error);
      });
  }