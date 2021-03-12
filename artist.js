const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();

  //add border to current tab
  this.classList.add("tab-border");
  //grab content item from the dom
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

//listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));

// Fetching data

const some = fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/artist/412/albums"
)
  .then((response) => response.json())
  // .then((res) => console.log(res))
  .then(albumFiller)
  .catch(console.error);

function albumFiller(data) {
  const albumCollection = data.data;
  // console.log(albumCollection);
  // const albumName = [];
  const cardRow = document.getElementById("cards-row");
  cardRow.innerHTML = "";
  const topTitle = document.getElementById("Artist-Title");
  topTitle.innerText = "";
  topTitle.innerText = `Queen`;

  albumCollection.forEach((album) => {
    const card = `<div class="col-lg-2 col-md-4 col-sm-6 mb-2" id="${album.id}">
    <a href="${album.link}">
      <div class="card border-0">
        <img
          src="${album.cover_medium}"
          class="card-img-top img-fluid custom-img-css"
          alt="album picture"
        />
        <div class="card-body m-0 p-0 pt-2">
          <p class="card-text text-center">
          ${album.title}
          </p>
          <p class="text-center">"Queen"</p>
        </div>
      </div>
    </a>
  </div>`;
    cardRow.innerHTML += card;
  });
  console.log(albumName);
  console.log(albumCollection);
}
