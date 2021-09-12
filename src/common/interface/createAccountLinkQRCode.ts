import { resultInfo } from "./commonResponse";

export interface request {
  scopes: string[]
  nonce: string
  redirectType?: string
  redirectUrl: string
  referenceId: string
  phoneNumber?: string
  deviceId?: string
  userAgent?: string
}

export interface response {
  resultInfo: resultInfo
  data?: data
}

interface data {
  linkQRCodeURL: string
}