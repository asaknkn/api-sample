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
    <table align="center" border="1" style="border-collapse: collapse">
      <thead v-if="response != ''">
          <tr>
              <th>Paramenter</th>
              <th>Value</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(value, name) in response.resultInfo" :key="name">
              <td>{{name}}</td>
              <td>{{value}}</td>
          </tr>
          <tr v-for="(value, name) in response.data" :key="name">
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
    merchantPaymentId: "20210806-01",
    amount: 100,
    currency: "JPY",
  }

  response: createCodeResponse | string = ""

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
    // const authorization = getAuthorization(path, "POST", JSON.stringify(requestBody))
    // axios({
    //   method: 'post',
    //   url: path,
    //   data: requestBody,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': authorization,
    //     'X-ASSUME-MERCHANT': process.env.VUE_APP_ASSUME_MERCHANT
    //   }
    // }).then(res => {
    //   console.log(res)
    //   this.response = res.data
    // }).catch(err => {
    //   console.log(err)
    // })
    axios.post(path, requestBody)
    .then(res => {
      console.log(res)
      this.response = res.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>