<template>
  <div class="deletecode">
    <Table :request-params="requestParams" :response="response" @call-api="deleteCode"></Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {inputRequest, response} from '@/common/interface/deleteCode'
import Table from '@/components/Table.vue'
import axios from 'axios'

@Component({
  components: {
    Table
  }
})
export default class DeleteCode extends Vue {
  requestParams:inputRequest = {
    codeId: "20210806-01"
  }

  response: response = {
    resultInfo: {
      code: "",
      message: "",
      codeId: ""
    },
  }

  deleteCode(value: inputRequest): void {
    const path = "/v2/codes/"
    const id = value.codeId
    axios.delete(`${path}${id}`)
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