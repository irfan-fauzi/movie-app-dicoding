import './movie-item.js';
class MovieList extends HTMLElement{

  set dataMovie(data){
    this._dataMovie = data;
    this.render();
  }

  set eventDetail(event){
    this._eventDetail = event;
  }

  set renderError(message){
    this._message = message
    this.innerHTML = `
    <h2 class="placeholder">${this._message}</h2>
    `;
  }

  render(){
    this.innerHTML = ``;
    this._dataMovie.forEach(data => {
      const movieItem = document.createElement('movie-item');
      movieItem.dataMovie = data;
      movieItem.eventDetail = this._eventDetail;
      this.appendChild(movieItem)
    })
  }

}

customElements.define('movie-list', MovieList);