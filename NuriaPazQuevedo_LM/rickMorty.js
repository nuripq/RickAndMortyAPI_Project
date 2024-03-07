document.addEventListener("DOMContentLoaded", function() {

    fetch("https://rickandmortyapi.com/api/character")

    .then(response => response.json())
    .then(data => {

        const characterList = document.getElementById("characterList");
        data.results.forEach(character => {

            const characterCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">Status: ${character.status}</p>
                        <p class="card-text">Species: ${character.species}</p>
                    </div>
                </div>
            </div>`;

            characterList.innerHTML += characterCard;
        });
    })

    .catch(error => console.log("Error fetching characters:", error));
});