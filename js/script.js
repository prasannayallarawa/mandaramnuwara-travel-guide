document.addEventListener('DOMContentLoaded', function() {
    console.log('Mandaramnuwara Explorer Home Page Loaded successfully!');

    
    const exploreButton = document.getElementById('explore-btn');
    const targetSection = document.getElementById('introduction');

    if (exploreButton && targetSection) {
        exploreButton.addEventListener('click', function(e) {
            
            if (e.currentTarget.getAttribute('href').startsWith('#')) {
                e.preventDefault(); 
                
                
                targetSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    }

    
});
// Add or merge this new code into your existing js/script.js

// Function required by the Google Maps API (called via 'callback=initMap' in the HTML)
function initMap() {
    // 1. Center the map near Mandaramnuwara (approximate central coordinates)
    const mandaramnuwaraCenter = { lat: 7.0700, lng: 80.8400 };

    // 2. Map Options
    const mapOptions = {
        zoom: 12, // Zoom level (12 is good for regional view)
        center: mandaramnuwaraCenter,
        mapTypeId: 'terrain' // Terrain view is nice for hill country
    };

    // 3. Create the Map object, linking it to the 'map' div in HTML
    const mapDiv = document.getElementById("map");
    if (!mapDiv) return; // Exit if the map div doesn't exist on this page

    const map = new google.maps.Map(mapDiv, mapOptions);

    // 4. Define specific location markers
    const locations = [
        { 
            position: { lat: 7.0867, lng: 80.8253 }, // Approximate Kolapathana Ella
            title: "Kolapathana Ella Waterfall 💧",
            info: "The most popular hiking and waterfall spot."
        },
        { 
            position: { lat: 7.0620, lng: 80.8490 }, // Approximate Balagolla Viewpoint
            title: "Balagolla Viewpoint 🌄",
            info: "Stunning panoramic views of the village."
        },
        { 
            position: { lat: 7.0680, lng: 80.8350 }, // Approximate Belihul Oya Area
            title: "Belihul Oya Stream 🏞️",
            info: "Natural bathing spot with clear mountain water."
        },
    ];

    // 5. Loop through locations and place markers on the map
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' // Use a green pin
        });

        // Add a simple Info Window on click
        const infoWindow = new google.maps.InfoWindow({
            content: `<strong>${location.title}</strong><br>${location.info}`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

// NOTE: Keep your existing DOMContentLoaded listener in script.js if you want the home page features to work!
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mandaramnuwara Explorer Page Loaded.');

    // Existing Home Page Scroll Logic (if reused across pages)
    const exploreButton = document.getElementById('explore-btn');
    if (exploreButton) {
        exploreButton.addEventListener('click', function(e) {
            if (e.currentTarget.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
// Add or merge this new code into your existing js/script.js

// Function to handle reservation filtering logic
function setupReservationFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const listingCards = document.querySelectorAll('.reservation-card');
    
    // Check if elements exist on the current page before adding listeners
    if (filterButtons.length === 0 || listingCards.length === 0) {
        return;
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Get the filter category from the data-filter attribute
            const filterType = button.getAttribute('data-filter');

            // 2. Update button active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 3. Loop through all listing cards and show/hide them
            listingCards.forEach(card => {
                const cardType = card.getAttribute('data-type');
                
                if (filterType === 'all' || cardType === filterType) {
                    // Show the card
                    card.classList.remove('hidden');
                } else {
                    // Hide the card
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Ensure the reservation filter setup runs when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mandaramnuwara Explorer Page Loaded.');

    // Existing Home Page Scroll Logic (if present and needed)
    const exploreButton = document.getElementById('explore-btn');
    if (exploreButton) {
        exploreButton.addEventListener('click', function(e) {
            if (e.currentTarget.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Call the new reservation filter setup function
    setupReservationFilter();

    // The initMap function (for locations.html) should still be in script.js but won't run here 
    // because the 'map' div isn't present in reservations.html.
});

// NOTE: Keep the existing initMap function in script.js for the locations page to work.
// (It's not shown here for brevity, but should remain in your file.)