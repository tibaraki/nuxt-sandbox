<template lang='pug'>
div.index
  img(src="~/assets/images/test.png")
  h1 test page

  input(v-model="dataTest")

  p prop: {{propTest}}
  p data: {{dataTest}}
  p computed: {{computedTest}}
  p store: {{sampleRootState}}
  p store(namespaced): {{sampleModuleState}}

  test-component(propTest="prop for child component")

  button(@click="setCounter(1000)") do vuex action
  button(@click="apiCallTest") do vuex action(api call)

  p
    span i18n: 
    span(v-t="'test.message'")
  p
    span i18n with args: 
    span(v-t="{path: 'test.message_with_arg',args: {arg: 'hoge'}}")

</template>

<script lang='ts'>
import Vue from "vue";
import Component from "nuxt-class-component";
import { Prop } from "vue-property-decorator";
import { mapState, mapActions } from "vuex";

// import components
import TestComponent from "~/components/atoms/TestComponent";

@Component({
  components: { TestComponent },
  computed: {
    ...mapState(["sampleRootState"]),
    ...mapState("test", ["sampleModuleState"])
  },
  methods: {
    ...mapActions("test", ["setCounter", "apiCallTest"])
  }
})
export default class Index extends Vue {
  // props
  @Prop({ default: "prop_default_value" })
  propTest!: string;
  // data
  dataTest = `initial data with prop(${this.propTest})`;
  // layout
  layout() {
    return "test";
  }
  // title
  head() {
    return { title: "testpage" };
  }

  // lifecycle hook
  mounted() {
    console.log([100, 200].includes(100)); // polyfill test
    console.log(
      (() => {
        return "transpile test";
      })()
    );
    this.methodTest();
  }
  // computed
  get computedTest() {
    return `computedTest with data(${this.dataTest})`;
  }
  // method
  methodTest() {
    alert(`methodTest with date(${this.dataTest})`);
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
