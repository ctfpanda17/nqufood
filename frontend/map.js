class Map {
    constructor(divName, position=[24.448, 118.3227]){
        // 創建地圖，預設中心點為金大
        this.map = L.map('map').setView(position, 16);

        // 建立標記清單
        this.markers = [];

        // 設定 OpenStreetMap 瓦片圖層
        this.tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);
    }

    addMarker(position=[24.448, 118.3227], displayString="(24.448, 118.3227)", panTo=false){
        let marker = L.marker(position).addTo(this.map);
        this.markers.push(marker);
        marker.bindPopup(displayString);
        if (panTo){
            this.map.panTo(position);
        }
        return marker;
    }

    panTo(position=[24.448, 118.3227], zoom=16){
        this.map.panTo(position);
        // delay until the map is panned to the position and zoom
        // setTimeout(() => this.map.setZoom(zoom), 300);
    }

    // remove markers on the list
    removeMarkers(){
        this.markers.forEach((marker) => this.map.removeLayer(marker));
    }
}

export {
    Map
};