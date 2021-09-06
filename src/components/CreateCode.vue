<template>
  <div class="createcode">
    <table align="center">
      <thead>
          <tr>
              <th>Paramenter</th>
              <th>Value</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(value, name) in requestParams" :key="name">
              <td>{{name}}</td>
              <td><input v-model="requestParams[name]" type="text"></td>
          </tr>
      </tbody>
    </table>
    <br><br>
    <button @click="createCode">実行</button>
    <br><br>
    <table v-if="response.resultInfo.code != ''" align="center" border="1" style="border-collapse: collapse">
      <thead>
          <tr>
              <th>Paramenter</th>
              <th>Value</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(value, name) in response.resultInfo" :key="`resultInfo-${name}`">
              <td>{{name}}</td>
              <td>{{value}}</td>
          </tr>
          <tr v-for="(value, name) in response.data" :key="`data-${name}`">
              <td>{{name}}</td>
              <td>{{value}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {createCodeReqest, createCodeResponse} from '@/common/interface/createCode'
// import {getAuthorization} from '@/api/header'
import axios from 'axios'

@Component
export default class CreateCode extends Vue {
  requestParams = {
    merchantPaymentId: "202108066-01",
    amount: 100,
    currency: "JPY",
  }

  response: createCodeResponse = {
    resultInfo: {
      code: "",
      message: "",
      codeId: "",
    },
  }

  createCode():void {
    const path = "/v2/codes"
    const requestBody: createCodeReqest = {
      merchantPaymentId: this.requestParams.merchantPaymentId,
      amount: {
        amount: this.requestParams.amount,
        currency: this.requestParams.currency,
      },
      codeType: "ORDER_QR",
    }
    axios.post(path, requestBody)
    .then(res => {
      console.log(res)
      this.response = res.data

      if (confirm("Do you move to PayPay cashier")) {
        open(this.response.data?.url, '_blank')
      }
      
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>