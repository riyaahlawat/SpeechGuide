function initMap() {
    const center = { lat: 37.7749, lng: -122.4194 };  // Set to a city coordinate, modify as needed
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: center
    });

    // Hospital locations (dummy data)
    const hospitals = [
        { name: "Blue Lake Hospital", lat: 37.789, lng: -122.401 },
        { name: "Sunrise Medical Center", lat: 37.759, lng: -122.435 },
        { name: "Green Valley Clinic", lat: 37.800, lng: -122.423 },
        { name: "Oceanview Healthcare", lat: 37.761, lng: -122.427 },
    ];

    // Create markers for each hospital
    hospitals.forEach(hospital => {
        const marker = new google.maps.Marker({
            position: { lat: hospital.lat, lng: hospital.lng },
            map: map,
            title: hospital.name
        });
    });
}

// Initialize map when window loads
window.onload = function() {
    initMap();
};
