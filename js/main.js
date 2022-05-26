// VARIABLE GLOBAL PARA USAR 'getElementById' DE FORMA ABREVIADA
const id = document.getElementById.bind(document);

/**
 * DESARROLLO DE LA FUNCIONANLIDAD DE BUSQUEDA DEL CLON DE GOOGLE
 */
const searchInput = id("search-input");
const btnSearch = id("btn-search");

function mostrarBusqueda(evento) {
  evento.preventDefault();

  if (evento.keyCode === 13 && searchInput.value.trim().length > 0) {
    let busqueda = searchInput.value;
    let url = `https://www.google.com/search?q=${busqueda}`;

    open(url, "_blank");
  }
}

function mostrarBusquedaClick(evento) {
  evento.preventDefault();

  if (searchInput.value.trim().length > 0) {
    let busqueda = searchInput.value;
    let url = `https://www.google.com/search?q=${busqueda}`;

    open(url, "_blank");
  }
}

searchInput.addEventListener("keyup", mostrarBusqueda);
btnSearch.addEventListener("click", mostrarBusquedaClick);

/**
 * FUNCIONANLIDAD DE CAMBIO DE THEME DARK
 */
// let col = getComputedStyle( document.documentElement )

let flat = true;
id("theme").addEventListener("click", () => {

  if (flat) {

    id("logo-google").src = "../image/googlelogo_light_color_272x92.png";

    document.documentElement.style.setProperty("--background-color", "#202124");
    document.documentElement.style.setProperty(
      "--background-color-footer",
      "#171717"
    );
    document.documentElement.style.setProperty("--color-dark", "#FFFFFF");
    document.documentElement.style.setProperty("--color-light", "#303134");
    document.documentElement.style.setProperty("--color-icon", "#aaaaaa");
    document.documentElement.style.setProperty(
      "--color-text-content",
      "#FFFFFF"
    );
    document.documentElement.style.setProperty("--color-border", "#303134");
    flat = false

  } else {


    id("logo-google").src = "../image/googlelogo_color_272x92dp.png";

    document.documentElement.style.setProperty("--background-color", "#FFFFFF");
    document.documentElement.style.setProperty(
      "--background-color-footer",
      "#FFFFFF"
    );
    document.documentElement.style.setProperty("--color-dark", "#000000de");
    document.documentElement.style.setProperty("--color-light", "#FFFFFF");
    document.documentElement.style.setProperty("--color-icon", "#5f6368");
    document.documentElement.style.setProperty(
      "--color-text-content",
      "#3c4043"
    );
    document.documentElement.style.setProperty("--color-border", "#dfe1e5");
    flat = true

  }


});
