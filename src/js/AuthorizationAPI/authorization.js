import option from "../option.js";


export default function Authorization() {
    fetch('https://api.themoviedb.org/3/authentication', option)  
}