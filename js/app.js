var searchInput = $('.search');
var itemWrapper = $('main');

function displayMatches(matches) {
  itemWrapper.html('');

  if (!matches) {
    return itemWrapper.html(`<p class="no-search">No results found.</p>`);
  }

  for (var matchObj of matches) {
    itemWrapper.append(`
      <div class="movie-item" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${matchObj.Poster})">
        <h3>${matchObj.Title}</h3>
        <p>Release Year: ${matchObj.Year}</p>
        <a href="https://www.imdb.com/title/${matchObj.imdbID}" target="_blank">View More Details</a>
      </div>
    `);
  }
}

function getMovieData(event) {
  var keyCode = event.keyCode;
  var searchText = searchInput.val().trim();

  if (keyCode === 13 && searchText) {
    var matches = [];

    $.get(`https://www.omdbapi.com/?apikey=20dc4c7f&s=${searchText}`)
    .then(function (data) {
      displayMatches(data.Search);      
    });
  }
}

function init() {
  searchInput.keydown(getMovieData);
}

init();

// Grab html elements
// Get the input's value on enter key press
// Grab data related to user's search
// Inject the movie items into the DOM, based on user's search
























