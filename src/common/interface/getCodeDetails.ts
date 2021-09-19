import { resultInfo } from "./commonResponse";
import { amount } from "./amount";
import { orderItem } from "./orderItem"; 

export interface inputRequest {
  merchantPaymentId: string
}
export interface response {
  resultInfo: resultInfo
  data?: data
}

interface data {
  paymentId: string
  status: string
  acceptedAt: number
  refunds: {
    data: refund[]
  }
  captures: {
    data: capture[]
  }
  revert: revert
  merchantPaymentId: string
  amount: amount
  requestedAt: number
  expiresAt: number
  canceledAt: number
  storeId: string
  terminalId: string
  orderReceiptNumber: string
  orderDescription: string
  orderItems: orderItem[]
  metadata: Record<string, unknown>
}

interface refund {
  status: string
  acceptedAt: number
  merchantRefundId: string
  paymentId: string
  amount: amount
  requestedAt: number
  reason: string
}

interface capture {
  acceptedAt: number
  merchantCaptureId: string
  amount: amount
  orderDescription: string
  requestedAt: number
  expiresAt: number
  status: string
}

interface revert {
  acceptedAt: number
  merchantRevertId: string
  requestedAt: number
  reason: string
}

