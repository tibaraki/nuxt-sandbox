import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default ({ app }: { app: any }) => {
  app.i18n = new VueI18n({
    locale: "ja",
    fallbackLocale: "ja",
    messages: {
      ja: require("~/locales/ja.yaml")
    }
  });
};
