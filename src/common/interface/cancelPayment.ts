import { resultInfo } from "./commonResponse";

export interface inputRequest {
  merchantPaymentId: string
}

export interface response {
  resultInfo: resultInfo
}