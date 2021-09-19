import { resultInfo } from "./commonResponse";
import { amount } from "./amount";
import { orderItem, orderRequestItem } from "./orderItem"; 

export interface inputRequest {
  merchantPaymentId: string
  amount: string
  currency: string
  orderDescription: string
  orderItemName: string
  orderItemCategory: string
  orderquantity: string
  orderItemProductId: string
  unitPriceAmount: string
  unitPriceCurrency: string
  storeInfo: string
  storeId: string
  terminalId: string
  redirectUrl: string
  redirectType: string
  userAgent: string
  isAuthorization: string
  authorizationExpiry: string
}

export interface request {
  merchantPaymentId: string
  amount: amount
  orderDescription?: string
  orderItems?: orderRequestItem[]
  codeType: string
  storeInfo?: string
  storeId?: string
  terminalId?: string
  requestedAt?: number
  redirectUrl?: string
  redirectType?: string
  userAgent?: string
  isAuthorization?: boolean
  authorizationExpiry?: number
}

export interface response {
  resultInfo: resultInfo
  data?: data
}

interface data {
  codeId: string
  url: string
  deeplink: string
  expiryDate: number
  merchantPaymentId: string
  amount: amount
  orderDescription: string
  orderItems: orderItem[]
  codeType: string
  storeInfo: string
  storeId: string
  terminalId: string
  requestedAt: number
  redirectUrl: string
  redirectType: string
  isAuthorization: boolean
  authorizationExpiry: number
}

