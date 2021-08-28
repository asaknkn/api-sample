<template>
  <div class="webpayment">
    <select v-model="selected">
      <option disabled value="">Please select one api</option>
      <option v-for="option in options" :key="option">{{option}}</option>
    </select>
    <br><br>
    <CreateCode v-if="selected === 'Create a Code'"></CreateCode>
    <GetCodeDetails v-else-if="selected === 'Get payment details'"></GetCodeDetails>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CreateCode from '@/components/CreateCode.vue'
import GetCodeDetails from '@/components/GetCodeDetails.vue'

@Component({
  components: {
    CreateCode,
    GetCodeDetails,
  },
})
export default class Home extends Vue {
  selected = ""
  id = 1
  options = [
    "Create a Code",
    "Get payment details",
  ]
}
</script>