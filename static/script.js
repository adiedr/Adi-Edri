const activePage = window.location.pathname;

const activeNav=document.querySelectorAll('nav a').forEach(
    MyLinks =>{
        if (MyLinks.href.includes(`${activePage}`)) {
            MyLinks.classList.add('Active');
        }
    }
)

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 31.771959, lng: 35.217018 },
    zoom: 9,
  });
}

window.initMap = initMap;
