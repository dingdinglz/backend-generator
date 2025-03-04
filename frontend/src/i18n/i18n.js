import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    en: {
      test : {
        hello : "Welcome",
      }
    },
    zh: {
      test: {
        hello : "欢迎",
      }
    },
    ja: {
      test: {
        hello: "こんにちは！"
      }
    }
  }
})