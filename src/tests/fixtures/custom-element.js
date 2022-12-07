class CustomElement extends HTMLElement {
  attributeChangedCallback(name, _, newValue) {
    if (name === "data-message") {
      document.querySelector(`#${this.getAttribute("data-id")}`).textContent = newValue
    }
  }
}

CustomElement.observedAttributes = ["data-message"]

customElements.define("custom-element", CustomElement)
