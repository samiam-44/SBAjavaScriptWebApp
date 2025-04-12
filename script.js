//Get elements
const jokeContainer = document.getElementById('joke-container');
const newJokeButton = document.getElementById('new-joke');
const saveJokeButton = document.getElementById('save-joke');
const favoritesContainer = document.getElementById('favorites');
const gif = document.getElementById('laughing-gif');
let currentJoke = '';
//Get joke from API
async function fetchJoke() {
  try {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const data = await res.json();
    currentJoke = data.joke; //save joke to current joke variable
//Display joke
    jokeContainer.textContent = currentJoke;
    //show save button after getting joke
    saveJokeButton.style.display = 'inline-block';
    getLaughingGif();
  } catch (err) {
    //If brakes tells user
    jokeContainer.textContent = 'OOPS! Jokes on you. It didnt work';
  }
}
const getLaughingGif = async () => {
    try {
      const res = await fetch(`https://api.giphy.com/v1/gifs/categories?api_key=`);
      const data = await res.json();
      const gifUrl = data.data.images.original.url;
  
      gif.src = gifUrl;
    } catch (error) {
      gif.src = ''; // clear gif if it fails
    }
  };
// Save the joke in local storage
function saveJoke() {
    //get saved jokes from localStroage or start with an empty if no jokes yet
    const savedJokes = JSON.parse(localStorage.getItem('jokes')) || [];
    if (!savedJokes.includes(currentJoke)) {
      savedJokes.push(currentJoke);// add joke to list
      localStorage.setItem('jokes', JSON.stringify(savedJokes));
      //show uipdated list of favorites on the screen
      showFavorites();
    }
  }
  //Show all the saved jokes on the page
  function showFavorites() {
    // get the jokes from local storage agaain
    const savedJokes = JSON.parse(localStorage.getItem('jokes')) || [];
   //if thers nothing saved yet show a message
    if (savedJokes.length === 0) {
      favoritesContainer.innerHTML = '<p>No favorites yet.</p>';
      return;
    }
    favoritesContainer.innerHTML = savedJokes.map(j => `<p>${j}</p>`).join('');
  }
  //Event listeners for the buttons
  newJokeButton.addEventListener('click', fetchJoke);
  saveJokeButton.addEventListener('click', saveJoke);
  
  // Show saved jokes when the page loads
  showFavorites();
 
