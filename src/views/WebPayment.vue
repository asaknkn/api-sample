<template>
  <div class="webpayment">
    <select v-model="selected">
      <option disabled value="">Please select one api</option>
      <option v-for="option in options" :key="option">{{option}}</option>
    </select>
    <br><br>
    <CreateCode v-if="selected === 'Create a Code'"></CreateCode>
    <GetCodeDetails v-else-if="selected === 'Get payment details'"></GetCodeDetails>
    <DeleteCode v-else-if="selected === 'Delete a Code'"></DeleteCode>
    <CancelPayment v-else-if="selected === 'Cancel Payment'"></CancelPayment>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CreateCode from '@/components/CreateCode.vue'
import GetCodeDetails from '@/components/GetCodeDetails.vue'
import DeleteCode from '@/components/DeleteCode.vue'
import CancelPayment from '@/components/CancelPayment.vue'

@Component({
  components: {
    CreateCode,
    GetCodeDetails,
    DeleteCode,
    CancelPayment,
  },
})
export default class WebPayment extends Vue {
  selected = ""
  options = [
    "Create a Code",
    "Get payment details",
    "Delete a Code",
    "Cancel Payment"
  ]
}
</script>