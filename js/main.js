const searchInput = document.getElementById('search-input');
const btnSearch = document.getElementById('btn-search');

function mostrarBusqueda(evento){

  evento.preventDefault();

  if(evento.keyCode === 13 && searchInput.value.trim().length > 0){

    let busqueda = searchInput.value
    let url = `https://www.google.com/search?q=${busqueda}`

    window.open(url, '_blank');
  }

}

function mostrarBusquedaClick(evento){

  evento.preventDefault();

  if(searchInput.value.trim().length > 0){

    let busqueda = searchInput.value
    let url = `https://www.google.com/search?q=${busqueda}`

    window.open(url, '_blank');
  }

}


searchInput.addEventListener('keyup', mostrarBusqueda)
btnSearch.addEventListener('click', mostrarBusquedaClick)