const url = 'https://www.omdbapi.com/?s=avengers&apikey=4b229795&';
const container = document.querySelector('.container');
var pelicula = document.getElementById('pelicula');
async function readMovies() {
  const respuesta = await fetch(url);
  const data = await respuesta.json();
  console.log(data);
  const saga = data.Search;
  // container.innerHTML = '';
  saga.forEach((element) => {
    // console.log(element.Poster);
    container.innerHTML += `<div class="movie">
        <img src="${element.Poster}" class="img" >
        <div class="info">
         <h2>${element.Title}</h2>
         <p>${element.Year}</p>
        </div>
      </div>`;
  });
}

readMovies();
