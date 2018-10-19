<template lang='pug'>
div.index
  img(src="~/assets/images/test.png")
  h1 test page

  input(v-model="dataTest")

  p prop: {{propTest}}
  p data: {{dataTest}}
  p computed: {{computedTest}}
  test-component(propTest="prop for child component")
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import TestComponent from '~/components/atoms/TestComponent.vue'

Component.registerHooks(['layout'])

@Component({
  components: {
    'TestComponent': TestComponent
  }
})
export default class Index extends Vue {
  layout () { return 'test' }
  
  // props
  @Prop({ default: 'prop_default_value' }) propTest!: string
  // data
  dataTest  = `initial data with prop(${this.propTest})`

  // lifecycle hook
  mounted () {
    this.methodTest()
  }
  // computed
  get computedTest () {
    return `computedTest with data(${this.dataTest})`
  }
  // method
  methodTest () {
    alert(`methodTest with date(${this.dataTest})`)
  }
}
</script>

<style lang='scss' scoped>
.index {
  h1 {
    color: navy;
  }
}
</style>