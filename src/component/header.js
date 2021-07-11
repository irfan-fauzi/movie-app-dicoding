class Header extends HTMLElement{
  connectedCallback(){
    this.render()
  }
  render(){
    this.innerHTML = `
    <div class="container">
      <h1>Movie List</h1>
    </div>
    `;
  }
}

customElements.define('app-header', Header);