const renderList = (list) => {
  const listContainer = document.querySelector(".catalog");

  listContainer.innerHTML = list.reduce((acc, item) => (
    `${acc}<a href="#" class="card">
        <div class="card__wrapper">
          <div class="card__like">
          ${getLikeIcon(item.like)}
          </div>
          <div class="card__image-wrapper">
            <img class="card__image" src="${item.picture.path}" alt="Product" />
          </div>
          <h3 class="card__title">${item.name}</h3>
          <div class="card__price">&#36;${item.price.value}</div>
        </div>
      </a>`
  ), '');
}

const search = (list) => {
  const searchInput = document.querySelector("#search");

  searchInput.addEventListener('input', (e) => {
    e.stopPropagation();
    const searchValue = e.target.value.trim().toLowerCase();
    const filteredList = list.filter(({name}) => name.toLowerCase().includes(searchValue));
    renderList(filteredList);
  });
}


fetchItems().then((list) => {
  renderList(list);
  search(list);
});