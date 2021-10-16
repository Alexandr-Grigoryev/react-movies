const BASE_URL = "https://api.themoviedb.org/3";

async function fetchWithErrorHandling(url) {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/week?api_key=fbea9f1423c9f0a1d682ef53259502f7`
  );
}

// export async function fetchTrending() {
//   const response = await fetch(
//     // `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=22463604-709d4d80ecefd06266ae1aa7f&image_type=photo&orientation=horizontal&per_page=12`

//     "https://api.themoviedb.org/3/trending/movie/week?api_key=fbea9f1423c9f0a1d682ef53259502f7"
//   );
//   if (response.ok) {
//     return response.json();
//   }
//   return await Promise.reject(new Error("Not found"));
// }

export async function fetchMovieById(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=fbea9f1423c9f0a1d682ef53259502f7&language=en-US`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error("Not found"));
}

export async function fetchMovieCast(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fbea9f1423c9f0a1d682ef53259502f7&language=en-US`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error("Not found"));
}

export async function fetchMovieReviews(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=fbea9f1423c9f0a1d682ef53259502f7&language=en-US&page=1`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error("Not found"));
}

export async function fetchMovieSearch(searchQuery) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=fbea9f1423c9f0a1d682ef53259502f7&query=${searchQuery}&language=en-US&page=1&include_adult=false`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error("Not found"));
}
