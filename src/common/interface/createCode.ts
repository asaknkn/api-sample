import { resultInfo } from "./commonResponse";
import { amount } from "./amount";
import { orderItem } from "./orderItem"; 

export interface createCodeReqest {
  merchantPaymentId: string
  amount: amount
  orderDescription?: string
  orderItems?: orderItem[]
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

export interface createCodeResponse {
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

