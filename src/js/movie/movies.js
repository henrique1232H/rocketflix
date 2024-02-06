import { BASE_URL } from "../api/api.js";
import option from "../api/option.js";


export default async function movies() {
    const endpointPage1 = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=1`

    const endpointPage2 = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=2`

    const endpointPage3 = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=3`

    const fetchPage1 = await fetch(endpointPage1, option);
    const response = await fetchPage1.json();

    const fetchPage2 = await fetch(endpointPage2, option);
    const responsePage2 = await fetchPage2.json();

    const fetchPage3 = await fetch(endpointPage3, option);
    const responsePage3 = await fetchPage3.json();

    const result = [];
    const concatArray = result.concat(responsePage2.results, responsePage3.results, response.results);

    return concatArray;
}