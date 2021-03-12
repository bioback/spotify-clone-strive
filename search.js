const searchSpotify = (query) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .then(renderData)
    .catch(console.log)
}
function renderData(data) {
    console.log(data)
    const collection = data
    const items= collection.data
    console.log(collection)
    console.log(items)
    const container = document.querySelector("#album-content")
    container.innerHTML=""
    items.forEach(item => {
        const album= item.album
        const artist = item.artist.name
        console.log(album)
        // const image = item.cover_xl
        const image = album.cover_xl
        console.log(image)
        const title = album.title;
        const spotify_id = album.id;
    
        container.innerHTML+=SearchResultComponent(image, title, artist, spotify_id )
    })
}
function SearchResultComponent(image, title, artist, spotify_id) {
    return `
    <div class="col-sm-6">
    <div class="card" style="width: 18rem;">
    <img src="${image}" class="card-img-top" alt="${title}">
    <div class="card-body">
   <a href = "/details.html?nasa_id=${spotify_id}">  <h5>${title}</h5> </a>
      <p class="card-text">${artist}</p>
    </div>
    </div>
  </div>`
}

function onLoad() {
    const params = new URLSearchParams(window.location.search)
    const query = params.get("query")
    if(query){
        const title = document.getElementById("search-results-text")
        title.innerText=`Search results for ${query}`
        searchSpotify(query)
    }
    else{
        window.location.replace("/")
    }
}

// const searchButtonHandler = function(){
//     const searchInput = document.getElementById("searchSpoti")
//     const query = searchInput.value
//     if(query){
//         window.location.replace(`/search.html?query=${searchInput.value}`)
//     }
//     else{
//         alert('Please type something to search 🤓')
//     }
// }
// window.onload=function(){
//     const searchButton = document.getElementById("searchSpoti")
//     searchButton.onkeydown=searchButtonHandler
// }