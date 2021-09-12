<template>
  <div class="createaccountlinkqrcode">
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
    <button @click="createAccount">実行</button>
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
import {request, response} from '@/common/interface/createAccountLinkQRCode'
import axios from 'axios'

@Component
export default class CreateAccountLinkQRCode extends Vue {
  requestParams = {
    scopes: ", 区切りで複数設定設定",
    noce: "",
    redirectType: "",
    redirectUrl: "",
    referenceId: "",
    phoneNumber: "",
    deviceId: "",
    userAgent: ""
  }

  response: response = {
    resultInfo: {
      code: "",
      message: "",
      codeId: "",
    },
  }

  createAccount(): void {
    const path = "v1/qr/sessions"
    const requestBody = this.newRequestBody()
    axios.post(path, requestBody)
    .then(res => {
      console.log(res)
      this.response = res.data

      if (confirm("Do you move to the login credentials page ")) {
        open(this.response.data?.linkQRCodeURL, '_blank')
      }
    }).catch(err => {
      console.log(err.response)
      if (err.response.data != null) {
        this.response = err.response.data
      }
    })
  }

  private newRequestBody(): request {
    return {
      scopes: this.requestParams.scopes.trim().split(','),
      nonce: this.requestParams.noce,
      redirectType: this.requestParams.redirectType,
      redirectUrl: this.requestParams.redirectUrl,
      referenceId: this.requestParams.referenceId,
      phoneNumber: this.requestParams.phoneNumber,
      deviceId: this.requestParams.deviceId,
      userAgent: this.requestParams.userAgent
    }
  }
}
</script>
