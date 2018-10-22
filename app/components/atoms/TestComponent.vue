<template lang='pug'>
div.test-component
  span {{ propTest }}
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class TestComponent extends Vue {
  // props
  @Prop({ default: 'prop_default_value' }) propTest!: string
}
</script>

<style lang='scss' scoped>
@import '@css/variables';

span {
  color: $sample-gold;
}
</style>