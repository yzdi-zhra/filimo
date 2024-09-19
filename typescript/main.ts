import bestOf__info from "./bestOF__info";
type Image = {
  src: string;
  id: string;
};
let switchImg = document.querySelector("#switch");
let movie = document.querySelector("#movieWrapper");
let serie = document.querySelector("#serieWrapper");
let flagMovie = true;
let flagSerie = false;
let x = 1;
let fetchMovies = async () => {
  try {
    let data = await fetch("https://yzdi-zhra.github.io/filimoProject/db.json");
    let res = await data.json();
    res.movies.map((item: Image) => {
      movie?.insertAdjacentHTML(
        "afterbegin",
        `
       <a href="#">
              <img class="rounded-[10px]" src="${item.src}">
            </a>
        `
      );
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};
let fetchSeries = async () => {
  try {
    let data = await fetch("https://yzdi-zhra.github.io/filimoProject/db.json");
    let res = await data.json();
    res.series.map((item: Image) => {
      serie?.insertAdjacentHTML(
        "afterbegin",
        `
        <a href="#">
        <img class="rounded-[10px] mobile:min-w-[150px]" id="img${item.id}" src="${item.src}"></img>
        </a>
        `
      );
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

let switchCheks = () => {
  if (flagSerie) {
    serie?.classList.add("flex");
    movie?.classList.add("hidden");
    serie?.classList.remove("hidden");
    movie?.classList.remove("flex");
    flagSerie = false;
    flagMovie = true;
  } else if (flagMovie) {
    uploadImages();
    movie?.classList.add("flex");
    serie?.classList.add("hidden");
    movie?.classList.remove("hidden");
    serie?.classList.remove("flex");
    flagSerie = true;
    flagMovie = false;
  }
};
fetchSeries();
bestOf__info();
let uploadImages = () => {
  while (x === 1) {
    fetchMovies();
    console.log("its runing");
    x =0;
  }
};
switchImg?.addEventListener("click", () => {
  switchCheks();
});
