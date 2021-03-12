function fetchData () {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/75621062`)
    .then(response => response.json())
    .then(renderData)
    .catch(console.error)
}

function renderData (data) {
    const albumInfo = data;
    console.log(albumInfo)
    const albums = albumInfo.title;
    const albumCover = document.getElementById('album-cover');
    albumCover.src=`${albumInfo.cover_xl}`
    const artist = document.getElementsByClassName('artist-name');
    for (i = 0; i < artist.length; i++) {
        artist[i].innerHTML = `${albumInfo.artist.name}`;
    }
    let albumName = document.getElementById("album-name");
    console.log(albumName);
    albumName.innerText = albums
    let albumYear = document.getElementById('album-year-songs')
    albumYear.innerText = `${albumInfo.release_date}`
    console.log(albumYear)
    let tracklist = document.getElementById('album-wrapper');
    console.log(tracklist);
    let songName = albumInfo.tracks.data;
    console.log(songName);
    for (i = 0; i < songName.length; i++) {
        let track = `<div class="song-container text-white d-flex justify-content-between align-items-center px-lg-5 px-2 my-2">
                  <div class="left d-flex justify-content-between align-items-center">
                    <div class="song-id-wrapper">
                      <p class="pt-2 song-id">${i+1}</p>
                    </div>
                    <div class="song-info pl-4">
                      <p class="song-name m-0 font-weight-bold">${albumInfo.tracks.data[i].title}</p>
                      <p class="artist-name m-0 font-weight-bold">${albumInfo.artist.name}</p>
                    </div>
                  </div>
                  <div class="right">
                    <p class="song-duration pt-3">${albumInfo.tracks.data[i].duration}</p>
                  </div>
                </div>`
                tracklist.innerHTML += track

    }
}

window.onload = fetchData