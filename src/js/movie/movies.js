import { BASE_URL } from "../api/api.js";
import option from "../option.js";


export default async function movies() {
    const endpointPage1 = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=1`

    const endpointPage2 = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=2`

    const fetchPage1 = await fetch(endpointPage1, option);
    const response = await fetchPage1.json();

    const fetchPage2 = await fetch(endpointPage2, option);
    const responsePage2 = await fetchPage2.json();


    const results = [response.results, responsePage2.results];

    return results;
}