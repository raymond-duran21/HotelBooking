const HotelService = require("../services/hotelService");

test("Buscar hoteles por ciudad y fecha devuelve resultados", () => {
    const service = new HotelService();
    const city = "Santo Domingo";
    const checkIn = new Date();
    const checkOut = new Date();
    checkOut.setDate(checkOut.getDate() + 5);

    const results = service.searchHotels(city, checkIn, checkOut);

    expect(results).not.toBeNull();
    expect(results.length).toBeGreaterThan(0);
});
