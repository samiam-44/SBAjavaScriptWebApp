const jokeContainer = document.getElementById('joke-container');
const newJokeButton = document.getElementById('new-joke');
const saveJokeButton = document.getElementById('save-joke');
const favoritesContainer = document.getElementById('favorites');

let currentJoke = '';

async function fetchJoke() {
  try {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const data = await res.json();
    currentJoke = data.joke;

    jokeContainer.textContent = currentJoke;
    saveJokeButton.style.display = 'inline-block';
  } catch (err) {
    jokeContainer.textContent = 'Failed to fetch joke. Try again!';
  }
}

