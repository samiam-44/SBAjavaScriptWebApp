// async function fetchCharacterData() {
//     const response = await fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=20');
//     const data = await response.json();
//     console.log(data); // Inspect the data structure in the console

//     const container = document.getElementById('character-container');
//     container.innerHTML = ''; // clear the container

//     data.forEach(character => {
//         // Only display characters that have a name


//         if (character.name) {
//             const characterCard = document.createElement('div');
//             characterCard.classList.add('character-card');
//             characterCard.innerHTML = `
//                 <h3>${character.name}</h3>
//                 <p><strong>Gender:</strong> ${character.gender || 'Unknown'}</p>
//                 <p><strong>Culture:</strong> ${character.culture || 'Unknown'}</p>
//                  <p><strong>Born:</strong> ${character.born || 'Unknown'}</p>
//                 <p><strong>Died:</strong> ${character.died || '—'}</p>
//                 <p><strong>Titles:</strong> ${character.titles.filter(title => title).join(', ') || 'None'}</p>
//                 <p><strong>Aliases:</strong> ${character.aliases.filter(alias => alias).join(', ') || 'None'}</p>
//             `;
//             container.appendChild(characterCard);
//         }
//     });
// }
//ALL ELEMENTS BY ID
const searchBar = document.getElementById('search-bar');
const characterSuggestions = document.getElementById('character-suggestions');
const characterList = document.getElementById('characters');
const characterDetails = document.querySelector('.character-details');
const backBtn = document.getElementById('back-btn');

const apiUrl = "https://www.anapioficeandfire.com/api/characters";

// fetch character data for suggestion list
async function fetchCharacterData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();

        if (characterSuggestions) {
            characterSuggestions.innerHTML = ''; // Clear previous suggestions
            data.forEach(character => {
                const option = document.createElement('option');
                option.value = character.name;
                characterSuggestions.appendChild(option);
            });
        } else {
            console.error("characterSuggestions element not found");
        }
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}
// Call the function to fetch the character data on load
fetchCharacterData();

    
