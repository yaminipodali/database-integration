const movieForm = document.getElementById('movieForm');
const movieList = document.getElementById('movieList');
const backendUrl = 'http://localhost:5000/api/movies';

movieForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const movie = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    category: document.getElementById('category').value,
  };

  const res = await fetch(backendUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie),
  });

  await res.json();
  movieForm.reset();
  fetchMovies();
});

async function fetchMovies() {
  const res = await fetch(backendUrl);
  const movies = await res.json();
  movieList.innerHTML = '';

  movies.forEach(movie => {
    const li = document.createElement('li');
    li.textContent = `${movie.title} - ${movie.description} (${movie.category})`;
    movieList.appendChild(li);
  });
}

fetchMovies();
