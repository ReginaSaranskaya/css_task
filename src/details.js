const renderItem = (item) => {
  const itemContainer = document.querySelector(".product")

  itemContainer.innerHTML = `<div class="product__view">
                <div class="product__wrapper-image">
                    <img class="product__image" src=${item.picture.path} alt="Product">
                </div>
            </div>
            <div class="product__info">
                <h1 class="product__title">${item.name}</h1>
                <p class="product__description">${item.description}</p>
                <h2 class="product__title product__title--small">Details</h2>
                <p class="product__description">${item.details}</p>
                <div class="product__cart-info">
                    <div class="product__price">&#36;${item.price.value}</div>
                    <div class="counter">
                        <button class="counter__button">&#8722;</button>
                        <label class="counter__label">
                            <input class="counter__input" type="number" value="1">
                        </label>
                        <button class="counter__button">+</button>
                    </div>
                    <button class="product__button button__add">Add to cart</button>
                    <div class="product__like">
                        ${getLikeIcon(item.like)}
                    </div>
                </div>
            </div>`;
}

fetchItem().then((item) => renderItem(item));