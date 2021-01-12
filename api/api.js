const BASE_URL = 'http://www.omdbapi.com/?apikey=287c70f0&t=';

async function request(url) {
  const response = await fetch(`${BASE_URL}['${url}']`);

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  return response.json();
}

export function getMovies(title) {
  return request(title);
}
