import movies from "./movies.js";
import showMovie from "./showMovie.js";



export default async function searchMovie() {
    const responseMovies = await movies();
    let arrayMovies = []


    responseMovies[0].forEach(({title, id, overview, poster_path}) => {        
        const movieInformation = {
            title,
            id,
            overview,
            poster_path
        }

        arrayMovies = [movieInformation, ...arrayMovies];
    })

    responseMovies[1].forEach(({title, id, overview, poster_path}) => {        
        const movieInformation = {
            title,
            id,
            overview,
            poster_path
        }

        arrayMovies = [movieInformation, ...arrayMovies];
    })


    document.querySelector("button").addEventListener("click", () => {
        showMovie(arrayMovies)

    })

}
