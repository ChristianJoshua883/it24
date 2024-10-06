
class LeafletMap {
    
    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();


        this.attendanceCountSC = 0;
        this.attendanceCountBA = 0;
        this.attendanceCountLab = 0;

        this.markerCounts = {};
        this.markers = [];

        this.loggedData = []; 

        this.SC = document.getElementById('SC');
        this.btn1 = document.getElementById('btn1');
        this.btn2 = document.getElementById('btn2');
        this.btnclear = document.getElementById('btnclear');
        this.logCountElement = document.getElementById('logCountSC');
        this.logCount1Element = document.getElementById('logCountLibrary');
        this.logCount2Element = document.getElementById('logCountGym');
        this.logContainer = document.getElementById('logContainer');

        this.btn.addEventListener('click', () => this.dataSc());
        this.btn1.addEventListener('click', () => this.dataLab());
        this.btn2.addEventListener('click', () => this.dataBa());
        this.btnclear.addEventListener('click', () => this.clearLogs());
    }


    initTileLayer() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }
   

    addMarker(lat, lng, message) {
        const marker = L.marker([lat, lng]).addTo(this.map);
        marker.bindPopup(message);
    }

    loadMarkersFromJson(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(marker => {
                    this.addMarker(marker.latitude, marker.longitude, marker.message);
                });
            })
            .catch(error => console.error('Error loading markers:', error));
    }
}

const myMap = new LeafletMap('map', [8.360004, 124.868419], 18);






myMap.loadMarkersFromJson('L07.json');








