const PaymentService = require("../services/paymentService");

test("Pago con tarjeta de crédito se procesa correctamente", () => {
    const service = new PaymentService();
    const paymentInfo = {
        cardNumber: "4111111111111111",
        expiryDate: "12/26",
        cvv: "123",
        amount: 200.50
    };

    const result = service.processPayment(paymentInfo);

    expect(result).toHaveProperty("isSuccess", true);
    expect(result).toHaveProperty("status", "Approved");
});