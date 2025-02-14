class HotelService {
    constructor() {
        this.hotels = [
            { id: 1, name: "Hotel Santo Domingo", city: "Santo Domingo", available: true },
            { id: 2, name: "Hotel Punta Cana", city: "Punta Cana", available: true },
            { id: 3, name: "Hotel Bávaro", city: "Bávaro", available: false }
        ];
    }

    searchHotels(city, checkIn, checkOut) {
        if (!city || !checkIn || !checkOut) {
            throw new Error("Faltan parámetros obligatorios");
        }

        return this.hotels.filter(hotel => hotel.city.toLowerCase() === city.toLowerCase() && hotel.available);
    }
}

module.exports = HotelService;