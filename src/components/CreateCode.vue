<template>
  <div class="createcode">
    <Table :request-params="requestParams" :response="response" @call-api="createCode"></Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {inputRequest, request, response} from '@/common/interface/createCode'
import Table from '@/components/Table.vue'
// import {getAuthorization} from '@/api/header'
import axios from 'axios'

@Component({
  components: {
    Table
  }
})
export default class CreateCode extends Vue {
  requestParams:inputRequest = {
    merchantPaymentId: "202108066-01",
    amount: "100",
    currency: "JPY",
    orderDescription: "",
    orderItemName: "sampleItem",
    orderItemCategory: "",
    orderquantity: "1",
    orderItemProductId: "",
    unitPriceAmount: "100",
    unitPriceCurrency: "JPY",
    storeInfo: "",
    storeId: "",
    terminalId: "",
    redirectUrl: "",
    redirectType: "",
    userAgent: "",
    isAuthorization: "false",
    authorizationExpiry: "0"
  }

  response: response = {
    resultInfo: {
      code: "",
      message: "",
      codeId: "",
    },
  }

  createCode():void {
    const path = "/v2/codes"
    const requestBody = this.newRequestBody()
    axios.post(path, requestBody)
    .then(res => {
      console.log(res)
      this.response = res.data

      if (confirm("Do you move to PayPay cashier")) {
        open(this.response.data?.url, '_blank')
      }
      
    }).catch(err => {
      console.log(err.response)
      if (err.response.data != null) {
        this.response = err.response.data
      }
    })
  }

// the prop is an object for Table(child) component.
// mutating requestParams itself inside the child component will affect parent state.
// I understand this is not good way.
  private newRequestBody(): request {
    return {
      merchantPaymentId: this.requestParams.merchantPaymentId,
      amount: {
        amount: +this.requestParams.amount,
        currency: this.requestParams.currency,
      },
      orderDescription: this.requestParams.orderDescription,
      orderItems: [
        {
          name: this.requestParams.orderItemName,
          category: this.requestParams.orderItemCategory,
          quantity: +this.requestParams.orderquantity,
          productId: this.requestParams.orderItemProductId,
          unitPrice: {
            amount: +this.requestParams.unitPriceAmount,
            currency: this.requestParams.unitPriceCurrency
          }
        },
      ],
      codeType: "ORDER_QR",
      storeInfo: this.requestParams.storeInfo,
      storeId: this.requestParams.storeId,
      terminalId: this.requestParams.terminalId,
      requestedAt: this.getTimeStamp(),
      redirectUrl: this.requestParams.redirectUrl,
      redirectType: this.requestParams.redirectType,
      userAgent: this.requestParams.userAgent,
      isAuthorization: this.requestParams.isAuthorization === "true",
      authorizationExpiry: +this.requestParams.authorizationExpiry
    }
  }

  private getTimeStamp() :number{
    const date = new Date()
    const nowUtc = Date.UTC(date.getUTCFullYear(),
                      date.getUTCMonth(),
                      date.getUTCDate(),
                      date.getUTCHours(),
                      date.getUTCMinutes(),
                      date.getUTCSeconds()
                      )
    return Math.round(nowUtc / 1000)
  }
}
</script>