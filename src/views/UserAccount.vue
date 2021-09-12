<template>
  <div class="webpayment">
    <select v-model="selected">
      <option disabled value="">Please select one api</option>
      <option v-for="option in options" :key="option">{{option}}</option>
    </select>
    <br><br>
    <CreateAccountLinkQRCode v-if="selected === 'Create Account Link QR Code'"></CreateAccountLinkQRCode>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CreateAccountLinkQRCode from '@/components/CreateAccountLinkQRCode.vue'

@Component({
  components: {
    CreateAccountLinkQRCode,
  },
})
export default class UserAccount extends Vue {
  selected = ""
  options = [
    "Create Account Link QR Code",
  ]
}
</script>