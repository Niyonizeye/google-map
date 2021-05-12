
if( navigator.geolocation)
navigator.geolocation.getCurrentPosition(
    function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude];

        const map = L.map('map').setView(coords, 14);

        // console.log(map);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          L.marker(coords).addTo(map)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
          // add event listener on map
          map.on('click', function(mapEvent){
            console.log(mapEvent);
            const { lat, lng} = mapEvent.latlng;
            // creating a marker
            L.marker([lat, lng]).addTo(map)
            .bindPopup(L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false
              
            }))
            .setPopupContent('Workout')
            .openPopup();
          })
    },
    function () {
      alert('Could not get your position');
    }
)