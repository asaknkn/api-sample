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
    <button @click="getPaymentDetails">実行</button>
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
import {response} from '@/common/interface/getCodeDetails'
import axios from 'axios'

@Component
export default class GetCodeDetails extends Vue {
  id = "20210806-01"
  response: response = {
    resultInfo: {
      code: "",
      message: "",
      codeId: ""
    },
  }

  getPaymentDetails():void {
    const path = "/v2/codes/payments/"
    axios.get(`${path}${this.id}`)
    .then(res => {
      console.log(res)
      this.response = res.data
    }).catch(err => {
      if (err.response.data != null) {
        this.response = err.response.data
      }
    })
  }
}
</script>