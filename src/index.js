import './component/header.js';
import './component/hero-app.js';
import './component/search-bar.js';
import './component/movieList.js';
import './component/detail-movie.js';
import './component/footer.js';
import './css/style.css';
import 'regenerator-runtime';


class MovieApp {

  constructor(){
    this.movieList = document.querySelector('movie-list');
    this.headerElement = document.querySelector('app-header');
    this.baseUrl = 'http://www.omdbapi.com/?apikey=eac2e9a2&';
    this.shadowElement = document.querySelector('.shadow');
    this.searchElement = document.querySelector('search-bar');
  }

  fetchDataFirstPage(){
    fetch(`${this.baseUrl}s=marvel`)
    .then(res => res.json())
    .then(res => this.renderCardMovie(res.Search))
    .catch(error => error)
  }

  fetchFilterMovie(keyword){
    fetch(`${this.baseUrl}s=${keyword}`)
    .then(res => res.json())
    .then(res => {
      if(keyword === ""){
        this.fallbackResult("keyword kosong")
      }
      else if(res.Response === "False"){
        this.fallbackResult(`${keyword} tidak ditemukan`)
      }
      else {
        this.renderCardMovie(res.Search)
      }
    })
    .catch(error => error)
    
  }
  

  fetchDetailMovie(idMovie){
    fetch(`${this.baseUrl}i=${idMovie}`)
    .then(res => res.json())
    .then(res => this.renderDetailMovie(res));
  }

  renderCardMovie(data){
    this.movieList.dataMovie = data;
  }

  fallbackResult(message){
    this.movieList.renderError = message;
  }

  renderDetailMovie(data){
    const detailMovieElement = document.createElement('detail-movie');
    detailMovieElement.dataMovie = data;
    document.body.appendChild(detailMovieElement);
    this.shadowElement.style.display = "block";
  }

} 

const movieApp = new MovieApp();
movieApp.fetchDataFirstPage();

movieApp.movieList.eventDetail = function(){
  const idMovie = this._dataMovie.imdbID;
  movieApp.fetchDetailMovie(idMovie)
}

movieApp.searchElement.eventSubmit = function(e){
  const keyword = this.valueJudul;
  movieApp.fetchFilterMovie(keyword)
  e.preventDefault()
}

movieApp.headerElement.eventHome = function(){
  movieApp.fetchDataFirstPage();
}