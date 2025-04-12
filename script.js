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