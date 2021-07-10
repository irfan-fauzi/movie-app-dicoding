class MovieList extends HTMLElement{

  set dataMovie(data){
    this._dataMovie = data;
    this.render();
  }

  set eventDetail(event){
    this._eventDetail = event;
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