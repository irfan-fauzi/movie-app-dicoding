class MovieItem extends HTMLElement{

  set dataMovie(data){
    this._dataMovie = data;
    this.render()
  }

  set eventDetail(event){
    this._eventDetail = event;
   
  }

  

  render(){
    const {Poster, Title, Year} = this._dataMovie;
    this.innerHTML = `
    <div class="card">
      <div class="img-wrap">
        <img src=${Poster} class="card-img" alt="">
      </div>  
      <div class="card-body">
        <h5 class="card-title">${Title}</h5>
        <h6 class="card-year">${Year}</h6>
        <button class="btn-detail">Show Detail</button>
      </div>
    </div>
    `;
    this.querySelector('.btn-detail').addEventListener('click', () =>  this._eventDetail())

  }
}

customElements.define('movie-item', MovieItem);