<template>
  <h1>111</h1>
  <button @click="test">{{$t('test.hello')}}</button>
  <RouterView />
</template>
<script>
import { LogDebug } from "../wailsjs/runtime/runtime.js";
export default {
  methods: {
    test()
    {
      LogDebug("111111")
      window.location.href = '/#/setting'
      this.$i18n.locale = 'ja'
    }
  },
}
</script>