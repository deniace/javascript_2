const rowMovie = document.querySelectorAll('.row')[1];
const movieContainer = document.querySelector('.movie-container');
const imgCard = document.querySelector(".card-img-top");

$('.search-button').on('click', function () {
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=243b9ca0&s=" + $('.input-keyword').val(),
        success: result => {
            let movies = result.Search;
            let card = '';
            console.log(movies);
            movies.forEach((movie) => {
                card += showMovie(movie);
            });
            // movieContainer.innerHTML = card;
            $('.movie-container').html(card);

            $('.modal-detail-button').on('click', function () {
                console.log($(this).data('imdbid'));
                $.ajax({
                    url: `http://www.omdbapi.com/?apikey=243b9ca0&i=${$(this).data('imdbid')}`,
                    success: (resp) => {
                        const movie = showModalsDetail(resp);
                        $('.modal-body').html(movie);
                    },
                    error: (e) => {
                        console.log(e)
                    }
                });
            });
        },
        error: (e) => {
            console.log(e)
        }
    });
});



function showMovie(movie) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle md-2 text-muted">${movie.Year}</h6>
                        <button class="btn btn-primary modal-detail-button" data-imdbid="${movie.imdbID}" data-bs-toggle="modal" data-bs-target="#movieDetailModal">Show detail</button>
                    </div>
                </div>
            </div>`;
}

function showModalsDetail(resp) {
    return `<div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <img src="${resp.Poster}" class="img-fluid w-100">
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item">
                        <h4>${resp.Title} (${resp.Year})</h4>
                    </li>
                    <li class="list-group-item"><strong>Director :</strong> ${resp.Director}</li>
                    <li class="list-group-item"><strong>Actors : </strong>${resp.Actors}</li>
                    <li class="list-group-item"><strong>Writer : </strong>${resp.Writer}</li>
                    <li class="list-group-item"><strong>Plot : </strong><br> ${resp.Plot}</li>
                </ul>
            </div>
        </div>
    </div>`
}