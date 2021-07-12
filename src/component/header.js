class Header extends HTMLElement{
  connectedCallback(){
    this.render()
  }
  set eventHome(event){
    this._eventHome = event;
  }
  render(){
    this.innerHTML = `
    <div class="container">
      <img src="https://raw.githubusercontent.com/irfan-fauzi/movie-app-dicoding/main/src/img/logo.png" alt="logo" class="logo">
      <ul class="menus">
        <li><a href="#">Home</a></li>
        <li><a href="#">Schedules</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">News</a></li>
        <button class="btn-login">Login</button>
      </ul>
    </div>
    `;
    this.querySelector('.logo').addEventListener('click', () => {
      this._eventHome();
    })
  }
}

customElements.define('app-header', Header);