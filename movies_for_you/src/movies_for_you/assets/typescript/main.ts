import { movies } from "./movies";

const movieContainer = document.getElementById("movieList");
const searchFieldInput = document.getElementById("searchInput") as HTMLInputElement;
const searchForm = document.getElementById("searchForm") as HTMLFormElement;
const yearUp = document.getElementById("yearUp") as HTMLButtonElement;
const yearDown = document.getElementById("yearDown") as HTMLButtonElement;
const rating = document.getElementById("bestRate") as HTMLButtonElement;

const arrayOfTitles: string[] = [];
const arrayOfReleases: string[] = [];
const arrayOfDirectors: string[] = [];

const copiedArray = [...movies]

for (let i = 0; i < movies.length; i++){
    arrayOfTitles.push(movies[i][0]);
    arrayOfReleases.push(movies[i][1]);
    arrayOfDirectors.push(movies[i][2]);
}

function search(event: Event){
    event.preventDefault();
    const searching: string = searchFieldInput.value.toUpperCase();
    movieContainer!.innerHTML = "";
    for (let i = 0; i < movies.length; i++){
        if (arrayOfTitles[i].toUpperCase().includes(searching) || arrayOfReleases[i].toUpperCase().includes(searching) || arrayOfDirectors[i].toUpperCase().includes(searching)){
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
    searchFieldInput.value = "";
}

function printMovies(array: any){
    movieContainer!.innerHTML = "";
    for (let i = 0; i < movies.length; i++){
        const card = document.createElement("div");
        const title = document.createElement("h2");
        const release = document.createElement("p");
        const director = document.createElement("p");
        const length = document.createElement("p");
        const genre = document.createElement("p");
        const rating = document.createElement("p");
        title.textContent = array[i][0];
        release.textContent = array[i][1];
        director.textContent = array[i][2];
        length.textContent = array[i][3];
        genre.textContent = array[i][4];
        rating.textContent = array[i][5];
        card.appendChild(title);
        movieContainer?.appendChild(card);
        movieContainer?.appendChild(release);
        movieContainer?.appendChild(director);
        movieContainer?.appendChild(length);
        movieContainer?.appendChild(genre);
        movieContainer?.appendChild(rating);
        }
}


searchForm.addEventListener("submit", search);

function sortUpAndPrint(event: Event){
    event.preventDefault();
    const sortedArrayDown = copiedArray.sort((a, b) => {
        const yearA = parseInt(a[1]);
        const yearB = parseInt(b[1]);
        return yearA - yearB;
    })
    printMovies(sortedArrayDown);
}

function sortDownAndPrint(event: Event){
    event.preventDefault();
    const sortedArrayDown = copiedArray.sort((a, b) => {
        const yearA = parseInt(a[1]);
        const yearB = parseInt(b[1]);
        return yearB - yearA;
    })
    printMovies(sortedArrayDown);
}

function bestRating(event: Event){
    event.preventDefault();
    const sortedArrayDown = copiedArray.sort((a, b) => {
        const yearA = parseInt(a[5]);
        const yearB = parseInt(b[5]);
        return yearB - yearA;
    })
    printMovies(sortedArrayDown);
}

if (yearUp) {
    yearUp.addEventListener('click', sortUpAndPrint);
}

if (yearDown) {
    yearDown.addEventListener('click', sortDownAndPrint);
}

if (rating) {
    rating.addEventListener('click', bestRating);
}