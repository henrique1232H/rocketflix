import randomNumber from "./randomNumber.js";
import { IMG_URL} from "../api/api.js"


export default function showMovie(movies) {
    const response = document.querySelector(".response");
    const randonimaze = randomNumber(movies.length);

    const result = movies[randonimaze];

    console.log(randonimaze)

    response.innerHTML = `
    <div class="card">
        <figure>
        <img src="./src/assets/poster.svg" alt="Hora de estudar" class="poster">
        
        </figure>
    
        <div class="text">
            <h2>hora de estudar</h2>
            <p>Acho que agora é hora de estudar em vez de assistir algo</p>
        </div>  
    </div>
    `

    response.querySelector("img").src = `${IMG_URL}${result.poster_path}`;
    response.querySelector("img").alt = `Poster do filme ${result.title}`;
    response.querySelector(".text h2").textContent = result.title;

    if(result.overview === "") {
        response.querySelector(".text p").textContent = "Não temos informações sobre esse filme";
        return
    }
    response.querySelector(".text p").textContent = result.overview;
    
}