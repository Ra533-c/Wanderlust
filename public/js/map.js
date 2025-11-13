{/* maptoken => from show.ejs kyuki public folder can't access env  */ }
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: listingById.geometry.coordinates, // starting position [lng, lat] from show.ejs
    zoom: 9 // starting zoom
});

// console.log(coordinates);

// Create a default Marker and add it to the map.

// 1. Create a new popup.
const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    `<h4>${listingById.location}</h4><p>Exact location after Booking</p>`
);

const marker1 = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listingById.geometry.coordinates) //these are listing.geometry.coordinates from show.ejs
    .setPopup(popup) // Set the popup on the marker
    .addTo(map);