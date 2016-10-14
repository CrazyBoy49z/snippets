<script>

// leaflet-Bibliothek http://leafletjs.com/download.html
// Marker-Grafiken: https://www.iconfinder.com/search/?q=marker&price=free    
    
var map=L.map("map").setView([51.8293,12.23982],16),osmUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",osmLayer=new L.TileLayer(osmUrl,{attribution:"Map data © OpenStreetMap contributors"});map.addLayer(osmLayer);var baseMaps={Basiskarte:osmLayer},LeafIcon=L.Icon.extend({options:{iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32]}});map.on("popupopen",function(a){var e=map.project(a.popup._latlng);e.y-=a.popup._container.clientHeight/2,map.panTo(map.unproject(e),{animate:!0})});var icon0=new LeafIcon({iconUrl:"../grafik/osm-rot.png"}),markers=[],marker39=L.marker([51.82936,12.23983],{title:"osm_39",icon:icon0}).addTo(map);
</script>