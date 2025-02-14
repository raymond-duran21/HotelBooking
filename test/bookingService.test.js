const BookingService = require("../services/bookingService");

test("Reservar una habitación devuelve confirmación", () => {
    const service = new BookingService();
    const hotelId = 1;
    const userId = 101;
    const checkIn = new Date();
    const checkOut = new Date();
    checkOut.setDate(checkOut.getDate() + 3);

    const confirmation = service.bookRoom(hotelId, userId, checkIn, checkOut);

    expect(confirmation).toHaveProperty("confirmationNumber");
    expect(confirmation.confirmationNumber).toMatch(/^CONF-/);
});