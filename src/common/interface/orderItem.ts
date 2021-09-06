import { amount } from "./amount";
export interface orderItem {
    name: string
    category: string
    quantity: number
    productId: string
    unit_price: amount
}

export interface orderRequestItem {
    name: string
    category: string
    quantity: number
    productId: string
    unitPrice: amount
}