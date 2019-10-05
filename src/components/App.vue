<template>
  <div>
    hogehogehogehoge
    <button @click="send">send</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    send() {
      console.log('send')
      chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        const tabId = tabs[0].id
        if (tabId) {
          chrome.tabs.sendMessage(tabId, { type: 'CLICK_POPUP' });
        }
      });
    }
  }
})
</script>