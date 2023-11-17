export enum OrderType {
  HAND = 'HAND',
  DOOR = 'DOOR',
}
export enum OrderStatus {
  DELIVERING = 'DELIVERING',
  DELIVERED = 'DELIVERED',
  RETURNED = 'RETURNED',
  QUEUE = 'QUEUE'
}

export enum PaymentType {
  TRANSFER = "TRANSFER",
  INTERNET = "INTERNET", QPAY = "QPAY", CASH = "CASH"
}
export enum OrderPaymentType {
  PAID = "PAID",
  UNPAID = "UNPAID",
}