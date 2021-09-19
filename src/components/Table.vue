<template>
  <div class="table">
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
    <button @click="callApi">実行</button>
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
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Table extends Vue {
  @Prop({ default: null })
  requestParams!: any
  @Prop({ default: null })
  response!: any

  @Emit("call-api")
  callApi(): any {
    return this.requestParams
  }
}
</script>