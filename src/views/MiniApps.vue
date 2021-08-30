<template>
  <div class="miniapps">
    <h1>This is an MiniApps page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import pp from '@paypay/mini-app-js-sdk'

@Component
export default class About extends Vue {

  mounted() {
    console.log(pp.init({
      clientId: 'xxxxx',
      env: 'staging',
      success(res) {
        console.log("success", res)
      },
      fail(res) {
        console.log("fail", res)
      }
    }))
  }
}
</script>
