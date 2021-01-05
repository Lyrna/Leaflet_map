//accès à mon compte
mapboxgl.accessToken = 'pk.eyJ1IjoibHlybmEiLCJhIjoiY2tqanNkOWt2MW05ZzJ6bG9sYXRhdHhnNiJ9.DFQdCswa6tjm84zpbUDwTg';

//Création de la map
var map = new mapboxgl.Map({
container: 'mapid',
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [3.003, 43.184], // starting position [lng, lat]
zoom: 13 // starting zoom
});

//contrôle de la carte -zoom et rotation
map.addControl(new mapboxgl.NavigationControl());

// //ICONS
// //style général
// var LeafIcon = L.Icon.extend({
//     options: {
//         iconSize:     [40, 40],
//         iconAnchor:   [22, 94],
//         popupAnchor:  [-3, -76]
//     }
// });

// //liste des images qui serviront d'icônes
// var cultura = new LeafIcon({iconUrl: '../img/map/books-media.png'}),
//     grandbuffet = new LeafIcon({iconUrl: '../img/map/food.png'}),
//     hopital = new LeafIcon({iconUrl: '../img/map/medical.png'});
//     espaceliberte = new LeafIcon({iconUrl: '../img/map/swimming-pools.png'});
//     halles = new LeafIcon({iconUrl: '../img/map/shopping.png'});

// L.icon = function (options) {
//     return new L.Icon(options);
// };

// // j'indique la position de mes icônes et pop-up au clic
// L.marker([3.031239, 43.179771], {icon: cultura}).addTo(map).bindPopup("Cultura");
// L.marker([2.993, 43.173767], {icon: grandbuffet}).addTo(map).bindPopup("Les Grands Buffets");
// L.marker([3.000136, 43.180508], {icon: hopital}).addTo(map).bindPopup("Hôpital de Narbonne");
// L.marker([2.9941015, 43.173885], {icon: espaceliberte}).addTo(map).bindPopup("Espace liberté");
// L.marker([3.005095, 43.181171], {icon: halles}).addTo(map).bindPopup("Les Halles");

