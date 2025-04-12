async function fetchCharacterData() {
    const response = await fetch('https://www.anapioficeandfire.com/api/characters');
    const data = await response.json();
    console.log(data); // Inspect the data structure in the console
}

fetchCharacterData();

const container = document.getElementById('character-container');
container.innerHTML = ''; //clear the container

data.forEach(character => {
    //Only display characters that have a name
    if (character.name) {
        
    }
    
});

