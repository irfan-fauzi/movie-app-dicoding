class SearchBar extends HTMLElement{

  connectedCallback(){
    this.render();
  }

  set eventSubmit(event){
    this._eventSubmit = event;
  } 

  get valueJudul(){
    return this.querySelector('#judul').value;
  }

  render(){
    this.innerHTML = `
    <form id="formDataFilm">
      <div class="form-element">
          <input type="text" id="judul" name="judul" placeholder="cari judul film .." required>
          <input type="submit" value="cari film" class="cari-btn">
      </div>
    </form>
    
    `;
    this.querySelector('.cari-btn').addEventListener('click', (e) => this._eventSubmit(e))
  }


}

customElements.define('search-bar', SearchBar);