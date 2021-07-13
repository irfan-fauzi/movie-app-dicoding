class HeroApp extends HTMLElement{

  connectedCallback(){
    this.render()
  }

  render(){
    this.innerHTML = `
    <div class="hero">
      <div class="text-wrap">
        <h2>film, acara tv tak terbatas dan lebih banyak lagi</h2>
        <h3>nonton dimana saja dan kapan saja</h3>
        <button class="btn-hero"><a href="#movie-list">Pilih Film <i class="far fa-play-circle"></i></a></button>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-app', HeroApp);