class Hero extends HTMLElement{

  connectedCallback(){
    this.render()
  }

  render(){
    this.innerHTML = `
    `
  }
}

customElements.define('hero-app', Hero);