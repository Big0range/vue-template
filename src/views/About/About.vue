<template>
  <div class="about_wrap">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
interface Obj {
  msg: string;
  changeMsg: (str: string) => void;
}

export default defineComponent({
  name: "About",
  setup() {
    const obj: Obj = reactive({
      msg: "about",
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
.about_wrap {
  cursor: auto;
}
</style>
