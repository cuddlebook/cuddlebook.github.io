class ReviewItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const label = this.getAttribute("data-label");

    this.innerHTML = `
      <style>
        div.review {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        div.review div.review-stars{
          display: flex;
          align-items: flex-start;
        }
        div.review span {
          font-size: 1rem;
        }
      </style>
      <div class="review">
        <div class="review-stars">
          <img src="./assets/review-star.svg">
          <img src="./assets/review-star.svg">
          <img src="./assets/review-star.svg">
          <img src="./assets/review-star.svg">
          <img src="./assets/review-star.svg">
        </div>
        <span>
          <i>${label}</i>
        </span>
    </div>
    `;
  }
}

customElements.define("review-item", ReviewItem)