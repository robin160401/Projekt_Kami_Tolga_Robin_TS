import { movies } from "./movies";

const movieContainer = document.getElementById("movieList");
const searchFieldInput = document.getElementById("searchInput") as HTMLInputElement;
const searchForm = document.getElementById("searchForm") as HTMLFormElement;

const arrayOfTitles: string[] = [];
const arrayOfReleases: string[] = [];
const arrayOfDirectors: string[] = [];

for (let i = 0; i < movies.length; i++){
    arrayOfTitles.push(movies[i][0]);
    arrayOfReleases.push(movies[i][1]);
    arrayOfDirectors.push(movies[i][2]);
}

function search(event: Event){
    event.preventDefault();
    const searching: string = searchFieldInput.value.toUpperCase();
    for (let i = 0; i < movies.length; i++){
        if (arrayOfTitles[i].toUpperCase().includes(searching) || arrayOfReleases[i].toUpperCase().includes(searching) || arrayOfDirectors[i].toUpperCase().includes(searching)){
            console.log(movies[i]);
        const card = document.createElement("div");
        const title = document.createElement("h2");
        const release = document.createElement("p");
        const director = document.createElement("p");
        const length = document.createElement("p");
        const genre = document.createElement("p");
        const rating = document.createElement("p");
        title.textContent = movies[i][0];
        release.textContent = movies[i][1];
        director.textContent = movies[i][2];
        length.textContent = movies[i][3];
        genre.textContent = movies[i][4].join();
        rating.textContent = movies[i][5];
        card.appendChild(title);
        movieContainer?.appendChild(card);
        movieContainer?.appendChild(release);
        movieContainer?.appendChild(director);
        movieContainer?.appendChild(length);
        movieContainer?.appendChild(genre);
        movieContainer?.appendChild(rating);
        }
    }
}
searchForm.addEventListener("submit", search);