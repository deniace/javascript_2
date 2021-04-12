const searchButton = document.querySelector(".search-button");
const movieContainer = document.querySelector(".movie-container");

searchButton.addEventListener('click', function () {
    const inputKeyword = document.querySelector('.input-keyword');
    fetch("http://www.omdbapi.com/?apikey=243b9ca0&s=" + inputKeyword.value)
        .then(response => {
            return response.json();
        })
        .then(response => {
            const movie = response.Search;
            let card = "";
            movie.forEach(movie => {
                card += showMovie(movie);
            });
            movieContainer.innerHTML = card;
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            // modalDetailButton.forEach((btn) => {
            //     btn.addEventListener("click", function () {
            //         console.log(this.data);
            //     });
            // });

        })
        .catch((e) => {
            movieContainer.innerHTML = "<div class='alert alert-danger'>Terjadi kesalahan</div>";
        });

});


function showMovie(movie) {
    return `<div class="col-md-4 my-5">
        <div class="card">
            <img src="${movie.Poster}" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle md-2 text-muted">${movie.Year}</h6>
                <button class="btn btn-primary modal-detail-button" data-imdbid="${movie.imdbID}" data-bs-toggle="modal" data-bs-target="movieDetailModal">Show Detail</button>
            </div>
        </div>
    </div>`;
};