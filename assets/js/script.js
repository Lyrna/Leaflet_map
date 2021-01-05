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

//icons
// var myIcon = L.icon({
//     iconUrl: '../img/map/books-media.png',
//     iconSize: [40, 40],
//     iconAnchor: [22, 94],
//     popupAnchor: [-3, -76]
// });

// L.marker([3.031239, 43.179771], {icon: myIcon}).addTo(map);

// Set Cultura icon
var cultura = new mapboxgl.Marker({
src: "../img/map/books-media.png",
draggable: false
}).setLngLat([3.031239, 43.179771])
.setPopup(new mapboxgl.Popup().setHTML("<img src='https://media.cultura.com/media/shop/45/cache/1/image/500x/9df78eab33525d08d6e5fb8d27136e95/n/a/narbonne_1.jpg' width='100%'/><strong>Cultura</strong><br/>Livres, jeux vidéos, musique, matériel de dessin, ce magasin propose une variété de produits liés au divertissement."))
.addTo(map);

//Set Les grands buffets icon
var grandbuffet = new mapboxgl.Marker({
url: "../img/map/food.png",
draggable: false
}).setLngLat([2.993, 43.173767])
.setPopup(new mapboxgl.Popup().setHTML("<img src='https://static.actu.fr/uploads/2020/06/narbonne-buffets.jpg' width='100%'><br/><strong>Les Grands Buffets</strong><br/>Mondialement reconnu, Les Grands Buffets propose une grande variété de produits, viandes, fromages, charcuterie, légumes, fruits, desserts en tout genre pour tous les goûts."))
.addTo(map);

//set l'hopital de narbonne icon
var hopital = new mapboxgl.Marker({
url: "../img/map/medical.png",
draggable: false
}).setLngLat([3.000136, 43.180508])
.setPopup(new mapboxgl.Popup().setHTML("<img src='https://images.lindependant.fr/api/v1/images/view/5a967b948fe56f73526ba8f8/large/image.jpg' width='100%'><br/><strong>Hôpital de Narbonne</strong><br/>En période de crise sanitaire mondiale, il est toujours bon de savoir où se trouve un établissement de santé"))
.addTo(map);

//set espace liberté
var espaceliberte = new mapboxgl.Marker({
url: "../img/map/swimming-pools.png",
draggable: false
}).setLngLat([2.9941015, 43.173885])
.setPopup(new mapboxgl.Popup().setHTML("<img src='https://images.lindependant.fr/api/v1/images/view/5a95a5568fe56f5185130e33/large/image.jpg' width='100%'><br/><strong>Espace liberté</strong><br/>Vous êtes à la recherche d'une piscine, d'une patinoire, d'un bowling ou d'un espace de restauration ? Vous avez trouvé le bon endroit pour passer de bons moments entre amis"))
.addTo(map);

//les halles icon
var halles = new mapboxgl.Marker({
url: "../img/map/shopping.png",
draggable: false
}).setLngLat([3.005095, 43.181171])
.setPopup(new mapboxgl.Popup().setHTML("<img src='https://media-cdn.tripadvisor.com/media/photo-s/0f/2d/ad/fe/le-parvis-des-halles.jpg' width='100%'><br/><strong>Les Halles</strong><br/>Allez faire vos courses aux Halles et vous aurez droit à une variété de produits consommables, pizza à emporter ou viande fraîche seront proposés par vos commercants préférés"))
.addTo(map);