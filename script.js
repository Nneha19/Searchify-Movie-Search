
let moviebox=document.getElementById('grid-container');
let search=document.getElementById("searchbox");
let searchbutton=document.getElementById("searchbtn");
let logo=document.querySelector('.logo');
let moviecontent=document.querySelector('.main-content');

logo.addEventListener('click',(e)=>{
    location.reload();
})

search.addEventListener('search',(e)=>{
    location.reload();
})
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=APIKEY";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=APIKEY&query=";

const getMovies= async(url)=>{
    const response=await fetch(url)
    const data=await response.json();
    showMovies(data);
}
getMovies(APIURL);

const showMovies=(data)=>{
    moviebox.innerHTML='';
    let arr=data.results;
    arr.forEach((result)=>{
        const imagePath = result.poster_path === null ? "notfound.png" : IMGPATH + result.poster_path;
        const box=document.createElement('div');
        box.innerHTML=`
        <img src="${imagePath}"  id="${result.title}" value/>`
        box.classList.add('grid-item');
        moviebox.appendChild(box);
    })
}

searchbutton.addEventListener("click",(e)=>{
    console.log(search.value);
    if (search.value != "") {
        getMovies(SEARCHAPI + search.value)
    } else {
        getMovies(APIURL);
    }
});

moviebox.addEventListener('click', (e)=>{
    var moviesearch={
        movie:e.target.id
    }
    var jsonData = JSON.stringify(moviesearch);
    localStorage.setItem('userData', jsonData);
    window.open('movie.html','_blank')
  });

