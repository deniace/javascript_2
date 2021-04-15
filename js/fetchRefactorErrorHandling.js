const searchButton = document.querySelector(".search-button");

searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    try {
        let movies = await getMovie(inputKeyword.value);
        updateUI(movies);
    } catch (error) {
        const movieContainer = document.querySelector(".movie-container");
        movieContainer.innerHTML = `<div class='alert alert-danger'>Terjadi kesalahan <br> ${error}</div>`;
    }
});

// mengambil data movie ke api
function getMovie(judul) {
    return fetch("http://www.omdbapi.com/?apikey=243b9ca0&s=" + judul)
        .then(response => {
            return response.json();
        })
        .then(response => {
            if (response.Response === "False") {
                // melempar error mesage
                throw new Error(response.Error);
            } else {
                return response.Search;
            }
        })
        .catch((e) => {
            // melempar error mesage
            throw new Error(e.message);
        });
}

function updateUI(movies) {
    const movieContainer = document.querySelector(".movie-container");
    let card = "";
    movies.forEach(movie => {
        card += showMovie(movie);
    });
    movieContainer.innerHTML = card;
}

// bikin ketika di klik button maka akan mengambil data ke api dan memasukan nya ke modal
document.addEventListener("click", async function (e) {
    // mengecek apakah button modal detail yang di klik
    if (e.target.className.includes("modal-detail-button")) {
        // mengambil data detail movie berdasarkan imdb id
        try {
            const imdbid = e.target.dataset.imdbid;
            let movieDetail = await getMovieDetail(imdbid);
            updateUIDetail(movieDetail);
        } catch (error) {
            const modalBody = document.querySelector(".modal-body");
            modalBody.innerHTML = `<div class='alert alert-danger'>Terjadi kesalahan <br> ${error}</div>`;;
        }
    }
});

// mengambil movie detail ke api
function getMovieDetail(imdbid) {
    return fetch("http://www.omdbapi.com/?apikey=243b9ca0&i=" + imdbid)
        .then(resp => {
            return resp.json();
        })
        .then((resp) => {
            if (resp.Response === "False") {
                // melempar error mesage
                throw new Error(resp.Error);
            } else {
                // mereturn data movie detail
                return resp;
            }
        })
        .catch((e) => {
            // melempar error mesage
            throw new Error(e.message);
        });
}



function updateUIDetail(movieDetail) {
    let modalDetail = showModalsDetail(movieDetail);
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = modalDetail;
}

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