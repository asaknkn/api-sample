<template>
  <div class="getcodedetails">
    <Table :request-params="requestParams" :response="response" @call-api="getPaymentDetails"></Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {inputRequest, response} from '@/common/interface/getCodeDetails'
import Table from '@/components/Table.vue'
import axios from 'axios'

@Component({
  components: {
    Table
  }
})
export default class GetCodeDetails extends Vue {
  requestParams:inputRequest = {
    id: "20210806-01"
  }
  response: response = {
    resultInfo: {
      code: "",
      message: "",
      codeId: ""
    },
  }

  getPaymentDetails(value: inputRequest):void {
    const path = "/v2/codes/payments/"
    const id = value.id
    axios.get(`${path}${id}`)
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