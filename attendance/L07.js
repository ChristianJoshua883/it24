class LeafletMap {

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();

        this.attendanceCountSC = 0;
        this.attendanceCountly = 0;
        this.attendanceCountgym = 0;

        this.markerCounts = {};
        this.markers = [];

        this.loggedData = []; 

        this.btn = document.getElementById('btn');
        this.btn1 = document.getElementById('btn1');
        this.btn2 = document.getElementById('btn2');
        this.btnclear = document.getElementById('btnclear');
        this.logCountElement = document.getElementById('logCount');
        this.logCount1Element = document.getElementById('logCountlibrary');
        this.logCount2Element = document.getElementById('logCountgym');
        this.idContainer = document.getElementById('logContainer');

        this.btn.addEventListener('click', () => this.data1());
        this.btn1.addEventListener('click', () => this.data2());
        this.btn2.addEventListener('click', () => this.data3());
        this.btnclear.addEventListener('click', () => this.clearLogs());
    }

    initTileLayer() {
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Sample for new corales BSIT student'
        }).addTo(this.map);
    }
      
    addMarker(lat, long, message){
        const marker = L.marker([lat, long]).addTo(this.map)
        this.markerCounts[message] = (this.markerCounts[message] || 0) + 1;
        this.updateMarkerPopup(marker, message);
        this.markers.push(marker);
    }

    updateMarkerPopup(marker, message) {
        const count = this.markerCounts[message];
        marker.bindPopup(`${message}<br>Attendance logs: ${count}`).openPopup();
    }

    loadMarkersFromJson(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(marker => {
                this.addMarker(marker.latitude, marker.longitude, marker.message);
            });
        })
        .catch(error => console.error("Error Loading servers:", error));
    }

    clearLogs(){
        this.attendanceCountSC = 0;
        this.attendanceCountly = 0;
        this.attendanceCountgym = 0;

        this.loggedData = [];
        this.markerCounts = {}; 
        this.markers.forEach(marker => {
            const message = marker.getPopup().getContent().split('<br>')[0]; 
            this.markerCounts[message] = 0;
            this.updateMarkerPopup(marker, message); 
        });

        this.updateLogDisplay();
    }

    displayLogCount() {      
        this.logCountElement.innerHTML = ` Building Attendance: ${this.attendanceCountSC}`;
        this.logCount1Element.innerHTML = `Building Attendance: ${this.attendanceCountly}`;
        this.logCount2Element.innerHTML = `Gym : ${this.attendanceCountgym}`;
   }

    data1() {
        this.addMarker(8.360234, 124.867481, 'SC building');
        this.attendanceCountSC++; 
        this.updateLogDisplay();
    }

    data2() {
        this.addMarker(8.359217, 124.867817, 'library building');
        this.attendanceCountly++;
        this.updateLogDisplay();
    }
    
    data3() {
        this.addMarker(8.360000, 124.868882, 'Gym building');
        this.attendanceCountgym++;
        this.updateLogDisplay();
    }

    updateLogDisplay() {
        this.idContainer.innerHTML = ''; 
        this.loggedData.forEach(data => {
            const logItem = document.createElement('div');
            logItem.className = 'log-item';
            this.idContainer.appendChild(logItem);
        });
        this.displayLogCount();
    }

}
const Mymap = new LeafletMap('map', [8.359735, 124.869206], 18);


Mymap.loadMarkersFromJson('L07.json');

document.addEventListener('DOMContentLoaded', () => {
    Mymap.displayLogCount();
    Mymap.loadMarkersFromJson('L07.json');
});






