class BookingService {
    constructor() {
        this.bookings = [];
    }

    bookRoom(hotelId, userId, checkIn, checkOut) {
        if (!hotelId || !userId || !checkIn || !checkOut) {
            throw new Error("Faltan datos para la reserva");
        }

        const confirmationNumber = `CONF-${Math.floor(Math.random() * 10000)}`;
        const booking = { confirmationNumber, hotelId, userId, checkIn, checkOut };

        this.bookings.push(booking);
        return booking;
    }
}

module.exports = BookingService;