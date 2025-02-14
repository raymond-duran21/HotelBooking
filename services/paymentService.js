class PaymentService {
    processPayment(paymentInfo) {
        if (!paymentInfo.cardNumber || !paymentInfo.expiryDate || !paymentInfo.cvv || !paymentInfo.amount) {
            throw new Error("Datos de pago incompletos");
        }

        // Simulación de aprobación de pago
        return {
            isSuccess: true,
            status: "Approved",
            transactionId: `TX-${Math.floor(Math.random() * 100000)}`
        };
    }
}

module.exports = PaymentService;