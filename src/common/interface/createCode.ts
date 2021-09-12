import { resultInfo } from "./commonResponse";
import { amount } from "./amount";
import { orderItem, orderRequestItem } from "./orderItem"; 

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

