const tilesP = [
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
  'https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png',
];

//MAPA DE LOS MARCADORES
let mapM = L.map('mapM').setView([21.152334, -101.7113132], 13);
//MAPA DE DONDE SE VERAN LOS POLIGONOS
let mapP = L.map('mapP').setView([21.152334, -101.7113132], 13);

let totMarks = [];
let allowedClicks = 0;
let tot;

document.getElementById('totMarker').addEventListener('change', function () {
  console.log(tot);
  tot = parseInt(document.getElementById('totMarker').value);
});

L.tileLayer(tilesP[0], {
  maxZoom: 17,
}).addTo(mapM);

var newIcon = L.icon({
  iconUrl: 'ubicacion.png',
  iconSize: [60, 60],
  iconAnchor: [30, 60],
  popupAnchor: [-3, -76],
});

mapM.doubleClickZoom.disable();
mapP.doubleClickZoom.disable();

mapM.on('dblclick', function (e) {
  if (allowedClicks < tot) {
    let latLng = mapM.mouseEventToLatLng(e.originalEvent);
    console.log(latLng);
    L.marker([latLng.lat, latLng.lng], { icon: newIcon }).addTo(mapM);
    let locs = [latLng.lat, latLng.lng];
    totMarks.push(locs);
    checkPoly();
    allowedClicks++;
  }
});

function checkPoly() {
  if (totMarks.length === 10) {
    L.tileLayer(tilesP[Math.floor(Math.random() * tilesP.length)], {
      maxZoom: 17,
    }).addTo(mapM);
  }
  if (totMarks.length === tot) {
    L.polygon(totMarks).addTo(mapP);
    //const randomElement = array[Math.floor(Math.random() * array.length)];
    //let randN = tilesP[Math.floor(Math.random() * tilesP.length)]

    totMarks.forEach((el) => {
      //console.log(el);
      L.marker([el[0], el[1]], { icon: newIcon }).addTo(mapP);
    });

    //Inicializacion de segundo mapa
    L.tileLayer(tilesP[Math.floor(Math.random() * tilesP.length)], {
      maxZoom: 17,
    }).addTo(mapP);
  }
}
