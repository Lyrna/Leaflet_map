//création de la map et setview
var map = L.map('mapid').setView([43.184, 3.003], 13);

//attribution et style de la map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHlybmEiLCJhIjoiY2tqanNkOWt2MW05ZzJ6bG9sYXRhdHhnNiJ9.DFQdCswa6tjm84zpbUDwTg'
}).addTo(map);

//création de l'icone cultura
var culturaIcon = L.icon({
    iconUrl: 'assets/img/map/books-media.png',

    iconSize:     [30, 40], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//création de l'icone buffet
var buffetIcon = L.icon({
    iconUrl: 'assets/img/map/restaurants.png',

    iconSize:     [30, 40], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// création de l'icone de l'hopital
var hopitalIcon = L.icon({
    iconUrl: 'assets/img/map/medical.png',

    iconSize:     [30, 40], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// création de l'icone des halles
var hallesIcon = L.icon({
    iconUrl: 'assets/img/map/shopping.png',

    iconSize:     [30, 40], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//création de l'icone pour l'espace liberté
var espaceLiberteIcon = L.icon({
    iconUrl: 'assets/img/map/swimming-pools.png',

    iconSize:     [30, 40], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// je place mes marqueurs sur ma map
L.marker([43.179771, 3.031239], {icon: culturaIcon}).addTo(map).bindPopup("<img src='assets/img/map/cultura.jpg' width='100%'/><strong>Cultura</strong><br/>Livres, jeux vidéos, musique, matériel de dessin, ce magasin propose une variété de produits liés au divertissement.");
L.marker([43.173767, 2.993], {icon: buffetIcon}).addTo(map).bindPopup("<img src='assets/img/map/buffet.jpg' width='100%'><br/><strong>Les Grands Buffets</strong><br/>Mondialement reconnu, Les Grands Buffets propose une grande variété de produits, viandes, fromages, charcuterie, légumes, fruits, desserts en tout genre pour tous les goûts.");
L.marker([43.180508, 3.000136], {icon: hopitalIcon}).addTo(map).bindPopup("<img src='assets/img/map/hopital.jpg' width='100%'><br/><strong>Hôpital de Narbonne</strong><br/>En période de crise sanitaire mondiale, il est toujours bon de savoir où se trouve un établissement de santé");
L.marker([43.181171, 3.005095], {icon: hallesIcon}).addTo(map).bindPopup("<img src='assets/img/map/halles.jpg' width='100%'><br/><strong>Les Halles</strong><br/>Allez faire vos courses aux Halles et vous aurez droit à une variété de produits consommables, pizza à emporter ou viande fraîche seront proposés par vos commercants préférés");
L.marker([43.173885, 2.9941015], {icon: espaceLiberteIcon}).addTo(map).bindPopup("<img src='assets/img/map/espace.jpg' width='100%'><br/><strong>Espace liberté</strong><br/>Vous êtes à la recherche d'une piscine, d'une patinoire, d'un bowling ou d'un espace de restauration ? Vous avez trouvé le bon endroit pour passer de bons moments entre amis");
