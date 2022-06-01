let searching = "x-men";
document.addEventListener("DOMContentLoaded", () => {
  getCinemark();
});
const search = document.querySelector("#search");
search.addEventListener("input", (e) => {
  searching = e.target.value;
  if (searching === "") {
    searching = "x-men";
  }
  getCinemark();
});
function getCinemark() {
  const urlCine = `http://www.omdbapi.com/?apikey=265d7fd1&s=${searching}`;

  fetch(urlCine)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data.Search);
      renderingServices(data.Search);
    });

  function renderingServices(peliculas) {
    const movies = document.querySelector("#movies");
    let html = "";

    peliculas.forEach((pelicula) => {
      const { Title, Poster, Year } = pelicula;
      html += `
      <div class="card" style="width:28rem">
        <img src="${Poster}" class="card-img-top" alt="..." />
        <div class="card-body">
                <h2 class="card-title">${Title}</h2>
                <p class="card-text">
                   ${Year} 
                </p>
                <a href="#" class="btn btn-primary">Detalle</a>
        </div>
      </div>
        `;
      movies.innerHTML = html;
    });
  }
}
