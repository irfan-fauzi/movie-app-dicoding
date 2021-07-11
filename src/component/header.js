class Header extends HTMLElement{
  connectedCallback(){
    this.render()
  }
  render(){
    this.innerHTML = `
    <div class="container">
      <h2>Irfan cinema</h2>
      <ul class="menus">
        <li><a href="#">Home</a></li>
        <li><a href="#">Schedules</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">News</a></li>
        <button class="btn-login">Login</button>
      </ul>
    </div>
    `;
  }
}

customElements.define('app-header', Header);