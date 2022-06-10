let elList = document.querySelector(".pokemons__list");

for (let pokemon of pokemons) {
  // CREATE ELEMENT
  let pokemonsItem = document.createElement("li");
  let pokemonsImg = document.createElement("img");
  let pokemonsItemTexts = document.createElement("div");
  let pokemonsHeartIcons = document.createElement("img");
  let pokemonsName = document.createElement("p");
  let pokemonsType = document.createElement("p");
  let pokemonsBottomTexts = document.createElement("div");
  let pokemonsWeight = document.createElement("p");
  let pokemonsHeight = document.createElement("p");

  // SET ATTRIBUTE
  pokemonsItem.setAttribute(
    "class",
    "pokemons__item d-flex flex-column align-content-center"
  );
  pokemonsImg.setAttribute("class", "item-photo mx-auto");
  pokemonsImg.setAttribute("src", pokemon.img);
  pokemonsImg.setAttribute("alt", "pokemon photo");
  pokemonsItemTexts.setAttribute("class", "item-body position-relative");
  pokemonsHeartIcons.setAttribute("class", "item-heart position-absolute");
  pokemonsHeartIcons.setAttribute("src", "./images/heart.svg");
  pokemonsHeartIcons.setAttribute("alt", "heart-icon");
  pokemonsHeartIcons.setAttribute("width", "30");
  pokemonsHeartIcons.setAttribute("height", "30");
  pokemonsName.setAttribute("class", "item-name");
  pokemonsType.setAttribute("class", "item-type");
  pokemonsBottomTexts.setAttribute("class", "item-bottom d-flex");
  pokemonsWeight.setAttribute("class", "item-weight");
  pokemonsHeight.setAttribute("class", "item-height");

  // TEXTCONTENT
  pokemonsName.textContent = pokemon.name;
  pokemonsType.textContent = pokemon.type;
  pokemonsWeight.textContent = pokemon.weight;
  pokemonsHeight.textContent = pokemon.height;

  // APPEND
  elList.appendChild(pokemonsItem);
  pokemonsItem.appendChild(pokemonsImg);
  pokemonsItem.appendChild(pokemonsItemTexts);
  pokemonsItemTexts.appendChild(pokemonsHeartIcons);
  pokemonsItemTexts.appendChild(pokemonsName);
  pokemonsItemTexts.appendChild(pokemonsType);
  pokemonsItemTexts.appendChild(pokemonsBottomTexts);
  pokemonsBottomTexts.appendChild(pokemonsWeight);
  pokemonsBottomTexts.appendChild(pokemonsHeight);
}
