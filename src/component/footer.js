class Footer extends HTMLElement{
  connectedCallback(){
    this.render()
  }
  render(){
    this.innerHTML = `
    <div class="container">
        <img src="https://raw.githubusercontent.com/irfan-fauzi/movie-app-dicoding/main/src/img/logo.png" alt="logo" class="logo">
    </div>
    `
  }
}

customElements.define('app-footer', Footer)