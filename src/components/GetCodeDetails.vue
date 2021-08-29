<template>
  <div class="getcodedetails">
    <table align="center">
      <thead>
          <tr>
              <th>Path Paramenter</th>
              <th>Value</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>id</td>
              <td><input v-model="id" type="text"></td>
          </tr>
      </tbody>
    </table>
    <br><br>
    {{response}}
    <br><br>
    <button @click="getPaymentDetails">実行</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {getCodeDetailsResponse} from '@/common/interface/getCodeDetails'
import {getAuthorization} from '@/api/header'
import axios from 'axios'

@Component
export default class GetCodeDetails extends Vue {
  id = "20210806-01"
  response: getCodeDetailsResponse = {
    resultInfo: {
      code: "",
      message: "",
      codeId: ""
    },
  }

  getPaymentDetails():void {
    const path = "/v2/codes/payments/"
    const authorization = getAuthorization(path, "GET")
    axios({
      method: 'get',
      url: `${path}${this.id}`,
      headers: {
        'Authorization': authorization,
        'X-ASSUME-MERCHANT': process.env.VUE_APP_ASSUME_MERCHANT
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>