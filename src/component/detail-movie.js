class DetailMovie extends HTMLElement{
  
  set dataMovie(data){
    this._dataMovie = data;
    this.render();
  }

  render(){
    const {Poster, Title, Year, Plot, Country, Actors, imdbRating} = this._dataMovie;
    this.innerHTML = `
    <div class="modal">
      <div class="container">
        <img src=${Poster} alt="poster">
        <div class="text-wrap">
          <h3 class="title"><span>Judul Film :</span> <br> ${Title}</h3>
          <h3 class="year"><span>Tahun Rilis:</span><br>${Year}</h3>
          <h3 class="plot"><span>Plot Cerita:</span><br>${Plot}</h3>
          <h3 class="countrey"><span>Negara asal:</span> <br> ${Country}</h3>
          <h3 class="actors"><span>Aktor / aktris :</span><br>${Actors}</h3>
          <h3 class="rating"><span>Rating imdb :</span><br>${imdbRating} <i class="fas fa-star"></i></h3>
          <button class="btn-close">tutup</button>
        </div>
      </div>
    </div>
    `;
    this.querySelector('.btn-close').addEventListener('click', () => {
      let shadow = document.querySelector('.shadow');
      shadow.style.display = "none";
      this.remove()
    })
  }
}
customElements.define('detail-movie', DetailMovie);