class SearchBar extends HTMLElement{

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <form id="formDataFilm">
      <div class="form-element">
          <input type="text" id="judul" name="judul" placeholder="cari judul film .." required>
          <input type="submit" value="cari buku" class="cari-btn">
      </div>
    </form>
    
    `;
  }
}

customElements.define('search-bar', SearchBar);