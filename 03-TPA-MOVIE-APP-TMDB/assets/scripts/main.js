const API_KEY = "ce30b2fe3fca8e9c4e35190915755c98";
const API_ENDPOINT = "https://api.themoviedb.org/3";
const API_REQ = `${API_ENDPOINT}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
const IMG_URL = 'https://image.tmdb.org/t/p/w300';
const API_SEARCH = `${API_ENDPOINT}/search/movie?api_key=${API_KEY}`;

getMoviesByApiReq(API_REQ);

async function getMoviesByApiReq(url) {
    const response = await fetch(url);
    const data = await response.json().then(data => listMovies(data.results));
};

/* ------------- End List Movies ------------- */

function listMovies(data) {

    movies.innerHTML = '';

	data.map(movies => {

		// console.log(movies);
		const listMovies = document.createElement('div');
		listMovies.className = "col-lg-4 mt-4"

		listMovies.innerHTML = `
                
            <div class="card">
                <img src="${IMG_URL + movies.poster_path}" class="card-img-top" alt="${movies.title}">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-9">
                            <p class="card-text">${movies.title}</p>
                        </div>
                        <div class="col-lg-3">
                            <p class="card-text rate">${movies.vote_average}</p>
                        </div>
                    </div>
                    <p class="card-text mt-4">${movies.release_date}</p>
                </div>
            </div>
		`

        document.getElementById('movies').appendChild(listMovies);
	});
};

/* ------------- End Get List Movies ------------- */


/* ------------- Search Feature ------------- */

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const searchQuery = document.getElementById("search").value;

    if (searchQuery){
        getMoviesByApiReq(API_SEARCH+'&query='+searchQuery+'&page=1');
    } else {
        getMoviesByApiReq(API_REQ);
    }
})

/* ------------- End Search Feature ------------- */
