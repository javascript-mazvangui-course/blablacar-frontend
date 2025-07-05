// 
document.addEventListener('DOMContentLoaded', () => {
  loadMyTrips();
})

const container = document.getElementById('main-content')

async function loadMyTrips() {
    try {
        // Charger mes trajets en tant que conducteur
        const driverTrips = [
            {
                id: 1,
                depart: 'Paris',
                destination: 'Lyon',
                date: '2023-10-15',
                heure: '14:00',
                prix: 30,
                places: 3,
                reservations: [
                    { id: 1, userId: 2, userName: 'Alice' },
                    { id: 2, userId: 3, userName: 'Bob' }
                ]
            },
            {
                id: 2,
                depart: 'Marseille',
                destination: 'Nice',
                date: '2023-10-20',
                heure: '09:00',
                prix: 20,
                places: 2,
                reservations: []
            }
        ]

        displayDriverTrips(driverTrips)
    } catch (error) {
        console.error('Erreur lors du chargement des trajets :', error);
    }
}

function displayDriverTrips(trips) {
    const driverTripsContainer = container.querySelector('#driverTrips')
    
    if (trips.length === 0) {
      driverTripsContainer.innerHTML = '<p class="loading">Aucun trajet publié</p>'
      return
    }

    driverTripsContainer.innerHTML = ''
    trips.forEach(trip => {
      const tripElement = createDriverTripCard(trip)
      driverTripsContainer.appendChild(tripElement)
    })
}

function createDriverTripCard(trip) {
    const card = document.createElement('div');
    card.className = 'trip-card'
    card.innerHTML = `
      <div class="trip-header">
        <div class="trip-route">${trip.depart} → ${trip.destination}</div>
        <div class="trip-price">${trip.prix}€</div>
      </div>
      <div class="trip-details">
        <div class="trip-detail">
          <span>📅</span>
          <span>${trip.date}</span>
        </div>
        <div class="trip-detail">
          <span>🕐</span>
          <span>${trip.heure}</span>
        </div>
        <div class="trip-detail">
          <span>👥</span>
          <span>${trip.places} places restantes</span>
        </div>
      </div>
      <div class="trip-conductor">
        ${trip.reservations.length} réservation(s)
      </div>
    `

    return card
  }