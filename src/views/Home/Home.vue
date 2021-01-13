<template>
  <div class="home_wrap">
    <h1><HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /></h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

interface Obj {
  msg: string;
  changeMsg: (str: string) => void;
}
export default defineComponent({
  name: "My",
  components: {
    HelloWorld
  },
  setup() {
    const obj: Obj = reactive({
      msg: "my",
      changeMsg(str: string) {
        this.msg = str;
      }
    });
    return {
      ...toRefs(obj)
    };
  }
});
</script>
<style lang="scss" scoped>
.home_wrap {
}
</style>
